import { TrackConverter } from './trackConverter';
import * as assert from 'assert';
import * as fs from 'fs';
import { MidiConverter } from './midiConverter';
import { cmajorTrack } from './expectedResults';
import { NoteDisplay } from '../../models/TrackDisplayType';
import { Alteration, NoteName } from '../../models/Notations';

describe('Track converter tests',function() {
    const midiData = fs.readFileSync(__dirname + '/midi/C-major.mid');
    const midiConverter = new MidiConverter(midiData);
    const track = midiConverter.getTrack(0);
    const trackConverter = new TrackConverter(track,120,[4,4],384);

    it('getNoteFromName should return right note',function() {
        const names = ['C4','C#4'];
        const exprected = [
            { note: NoteName.C, octave: 4, alteration: undefined },
            { note: NoteName.C, octave: 4, alteration: Alteration['#']}
        ]
        for (let i = 0; i < names.length; i++) {
            const result = trackConverter.getNoteFromName(names[i]);
            assert.deepEqual(result,exprected[i]);
        }
    });
    it('should convert C-major scale',function() {
        const result = trackConverter.convert();
        const exprected = cmajorTrack;
        assert.deepEqual(result,exprected);
    });
});