import * as fs from 'fs';
import * as path from 'path';
import { MidiConverter } from './midiConverter';
import { TrackConverter } from './trackConverter';

function write(url: string,id) {
    const midiData = fs.readFileSync(url);
    const midiConverter = new MidiConverter(midiData);
    const midi = midiConverter.midi;
    const track = midiConverter.getTrack(0);
    const bpm = midi.header.tempos[0].bpm;
    const timeSignature = midi.header.timeSignatures[0].timeSignature;
    const ppq = midi.header.ppq;
    const trackConverter = new TrackConverter(track,bpm,timeSignature,ppq);
    const trackDisplay = trackConverter.convert();

    fs.writeFileSync(__dirname + `/test-samples/${id}.json`,JSON.stringify(trackDisplay));
}

export function writeAll() {
    for (let i = 1; i < 5; i++) {
        const url = path.resolve(__dirname,`/midi/${i}.mid`);
        write(url,i);
    }
}