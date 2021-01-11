import * as synth from 'synth-js';
import * as fs from 'fs';
import * as path from 'path';

export function midiToWav(midiData: Buffer) : Buffer {
    return synth.midiToWav(midiData).toBuffer();
}