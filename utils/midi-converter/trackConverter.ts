import { Track } from '@tonejs/midi';
import { Note } from '@tonejs/midi/dist/Note';
import { Alteration, Clef, Duration, DurationCoeffs, NoteName, Size } from '../../models/Notations';
import { ChordDisplay, MeasureDisplay, NoteDisplay, TrackDisplay } from '../../models/TrackDisplayType';

export class TrackConverter {
    private track: Track;
    private bpm: number;
    private ppq: number;
    private size: Size;
    private Measures: MeasureDisplay[];
    private measureDurationTicks: number;
    private tickDuration: number;
    private measureDuration: number;

    constructor(track: Track,bpm: number,timeSignature: number[],ppq: number) {
        this.track = track;
        this.bpm = bpm;
        this.ppq = ppq;
        this.size = {
            Count: timeSignature[0],
            Per: timeSignature[1],
        }
        this.Measures = [];
        this.measureDurationTicks = 4 * this.ppq * this.size.Count / this.size.Per;
        this.tickDuration = 60000 / (this.bpm * this.ppq);
        this.measureDuration = this.measureDurationTicks * this.tickDuration;
    }

    convert() : TrackDisplay {
        const notes = this.track.notes;
        return {
            Instrument: this.track.instrument.name,
            //Name: this.track.name,
            Bpm: this.bpm,
            Size: this.size,
            Key: NoteName.C,
            Clef: this.getClef(this.track.notes),
            Measures: this.convertNotes(notes)
        }
    }

    private convertNotes(notes: Note[]) {
        let id = 0;
        let measure = this.getEmptyMeasure(id);
        let prevTicks = 0;
        let prevNote: Note;
        for (const note of notes) {
            const delta = note.ticks - prevTicks;
            if (delta > 0) {
                const noteDisplay = this.getNote(note);
                noteDisplay.Duration = this.getNoteDuration(delta);
                noteDisplay.IsPause = true;
                measure.Chords.push(this.getChord(noteDisplay));
            }

            if(prevNote && prevNote.ticks === note.ticks) {
                const noteDisplay = this.getNote(note);
                const chordsLength = measure.Chords.length;
                measure.Chords[chordsLength - 1].Notes.push(noteDisplay);

                prevTicks = note.ticks + note.durationTicks;
                prevNote = note;
                continue;
            }

            if (note.ticks >= (id + 1) * this.measureDurationTicks) {
                this.Measures.push(measure);
                id += 1;
                measure = this.getEmptyMeasure(id);
            }

            const noteDisplay = this.getNote(note);
            const chord = this.getChord(noteDisplay);
            measure.Chords.push(chord);

            prevTicks = note.ticks + note.durationTicks;
            prevNote = note;
        }
        this.Measures.push(measure);
        return this.Measures;
    }

    getNote(note: Note) : NoteDisplay {
        let name : NoteName,
            alteration : Alteration | undefined,
            octave : number;
        ({name, alteration, octave} = this.getNoteFromName(note.name));
        const noteDuration = this.getNoteDuration(note.durationTicks);
        const isDotted = noteDuration.toString().includes('d');
        return {
            Name: name,
            Alteration: alteration,
            Octave: octave,
            Duration: noteDuration,
            IsPause: false,
            IsDotted : isDotted,
        }
    }

    getChord(...notes: NoteDisplay[]) : ChordDisplay {
        return { Notes: notes }
    }

    getEmptyMeasure(id:number) : MeasureDisplay {
        return {
            Id: id,
            Time: id*this.measureDuration,
            Chords: []
        }
    }

    getNoteDuration(durationTicks: number) : Duration {
        let coeff = durationTicks/this.ppq;
        const duration =  DurationCoeffs[coeff];
        if (duration) return duration;

        coeff = this.roundCoefficient(coeff);
        return DurationCoeffs[coeff];
    }

    roundCoefficient(value: number) {
        const coeffs = Object.keys(DurationCoeffs).map(c => +c).sort();
        let result = -1, bestDistance = Number.MAX_VALUE;
        for (const coeff of coeffs) {
            const delta = Math.abs(value - coeff);
            if (delta < bestDistance) {
                result = coeff;
                bestDistance = delta;
            }
        }
        return result;
    }

    getNoteFromName(noteName: string) {
        const arr = noteName.split('');
        const name : NoteName = NoteName[arr[0]];
        const alteration = arr.length === 3 ? Alteration['#'] : undefined;
        const octave = arr.length === 3 ? +arr[2] : +arr[1];
        return {name,alteration,octave}
    }

    getClef(notes: Note[]) : Clef {
        const obj = {}
        for (const note of notes) {
            const octave = note.name.slice(-1);
            obj[octave] = obj[octave] ? obj[octave] + 1 : 1;
        }
        const octave = +Object.keys(obj).reduce( (a,b) => obj[a] > obj[b] ? a : b, 4);
        
        if (octave < 4) return Clef.Bass;
        return Clef.Treble;
    }
}
