import { TrackConverter } from './trackConverter';
import * as assert from 'assert';
import * as fs from 'fs';
import { MidiConverter } from './midiConverter';
import { chord, cmajorTrack, paused, pausedStart } from './expectedResults';
import { Alteration, Duration, NoteName } from '../../models/Notations';

describe('Track converter tests',function() {
    let midiData = fs.readFileSync(__dirname + '/midi/C-major.mid');
    let midiConverter = new MidiConverter(midiData);
    let track = midiConverter.getTrack(0);
    let trackConverter = new TrackConverter(track,120,[4,4],384);

    it('getNoteFromName should return right note',function() {
        const names = ['C4','C#4'];
        const exprected = [
            { name: NoteName.C, octave: 4, alteration: undefined },
            { name: NoteName.C, octave: 4, alteration: Alteration['#']}
        ]
        for (let i = 0; i < names.length; i++) {
            const result = trackConverter.getNoteFromName(names[i]);
            assert.deepEqual(result,exprected[i]);
        }
    });

    it('getNoteDuration should return right duration for multiplies of ppq', function() {
        //ppq = 384;
        assert.equal(trackConverter.getNoteDuration(384),Duration.Quarter)
        assert.equal(trackConverter.getNoteDuration(192),Duration.Eighth);
        assert.equal(trackConverter.getNoteDuration(96),Duration.Sixteen);
    });

    it('getNoteDuration should return right duration for not multiplies of ppq', function () {
        let actual = trackConverter.getNoteDuration(333);
        assert.equal(actual,Duration.EighthWithDot,`expected: ${Duration.EighthWithDot}, actual: ${actual}`);
        actual = trackConverter.getNoteDuration(100);
        assert.equal(actual,Duration.Sixteen,`expected: ${Duration.Sixteen}, actual: ${actual}`);
        actual = trackConverter.getNoteDuration(800);
        assert.equal(actual,Duration.Half,`expected: ${Duration.Half}, actual: ${actual}`);
    });

    it('should convert C-major scale',function() {
        const result = trackConverter.convert();
        const exprected = cmajorTrack;
        assert.deepEqual(result,exprected);
    });

    it('should find pauses on the end of measure', function() {
        midiData = fs.readFileSync(__dirname + '/midi/paused.mid');
        midiConverter = new MidiConverter(midiData);
        track = midiConverter.getTrack(0);
        trackConverter = new TrackConverter(track,120,[4,4],384);

        const result = trackConverter.convert();
        assert.deepEqual(result, paused);
    });

    it('should find pauses on the start of measure', function() {
        midiData = fs.readFileSync(__dirname + '/midi/paused_start.mid');
        midiConverter = new MidiConverter(midiData);
        track = midiConverter.getTrack(0);
        trackConverter = new TrackConverter(track,120,[4,4],384);

        const result = trackConverter.convert();
        assert.deepEqual(result, pausedStart);
    });

    it('should translate chords', function() {
        midiData = fs.readFileSync(__dirname + '/midi/chord.mid');
        midiConverter = new MidiConverter(midiData);
        track = midiConverter.getTrack(0);
        trackConverter = new TrackConverter(track,120,[4,4],384);

        const result = trackConverter.convert();
        assert.deepEqual(result, chord);
    });
});