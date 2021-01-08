import { Midi } from '@tonejs/midi';
import { midi } from '../../controllers/homeController';

export function getMidi(midiData:Buffer) {
    const midi = new Midi(midiData);
    return midi;
}

export class MidiConverter {
    midi: Midi;

    constructor(midiData: Buffer) {
        this.midi = new Midi(midiData);
    }

    getTrack(id: number) {
        return this.midi.tracks[id];
    }
}