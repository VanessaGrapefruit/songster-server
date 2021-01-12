import { Midi, Track } from '@tonejs/midi';
import { SongDisplay, TrackDisplay } from '../../models/TrackDisplayType';
import { TrackConverter } from './trackConverter';

export function getMidi(midiData:Buffer) {
    const midi = new Midi(midiData);
    return midi;
}

export class MidiConverter {
    midi: Midi;
    bpm: number;
    ppq: number;
    timeSignature: number[];

    constructor(midiData: Buffer) {
        this.midi = new Midi(midiData);
        this.bpm = this.midi.header.tempos[0].bpm;
        this.ppq = this.midi.header.ppq;
        this.timeSignature = this.midi.header.timeSignatures[0].timeSignature;
    }

    getTrack(id: number) {
        return this.midi.tracks[id];
    }

    convert() : SongDisplay {
        return {
            Name: this.midi.header.name,
            Author: '',
            Difficulty: 1,
            Tracks: this.midi.tracks.map( (track:Track) => this.convertTrack(track)),
        }
    }

    convertTrack(track: Track) {
        const trackConverter = new TrackConverter(track,this.bpm,this.timeSignature,this.ppq);
        return trackConverter.convert();
    }
}