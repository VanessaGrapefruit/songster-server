import { Track } from '@tonejs/midi';
import { Note } from '@tonejs/midi/dist/Note';
import { Alteration, Clef, DurationCoeffs, NoteName, Size } from '../../models/Notations';
import { MeasureDisplay, TrackDisplay } from '../../models/TrackDisplayType';

export class TrackConverter {
    private track: Track;
    private bpm: number;
    private ppq: number;
    private size: Size;
    private Measures: MeasureDisplay[];
    //private quarterDuration: number;
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
        //this.quarterDuration = 60/this.bpm;
        this.measureDuration = 4 * this.ppq * this.size.Count / this.size.Per;
    }

    convert() : TrackDisplay {
        return {
            Instrument: this.track.instrument.name,
            Bpm: this.bpm,
            Size: this.size,
            Key: NoteName.C,
            Clef: Clef.Treble,
            Measures: []
        }
    }

    private convertNotes() {
        const notes = this.track.notes;
        for (const note of notes) {

        }
    }

    getNoteDuration(note: Note) {
        const coeff = note.durationTicks/this.ppq;
        return DurationCoeffs[coeff];
    }

    getNoteFromName(noteName: string) {
        const arr = noteName.split('');
        const note = NoteName[arr[0]];
        const alteration = arr.length === 3 ? Alteration['#'] : undefined;
        const octave = arr.length === 3 ? +arr[2] : +arr[1];
        return {note,alteration,octave}
    }
}
