import { Duration, Clef, Size, Touch, NoteName } from './Notations';

export interface Song {
    Tracks: Track[];
    Name: string;
    Author: string;
    Difficulty: number;
}

export interface Track {
    Instrument: string;
    Name?: string;
    Author?: string;
    Sections: Section[];
}

export interface Section {
    Bpm: number;
    Key: NoteName;
    Clef: Clef;
    Size: Size;  //number of beats per measure
    Measures: Measure[];
}

export interface Measure {
    Id: number;
    Time: number;
    Notes: Chord[];  // sum of all notes durations must be equal to size!!!
}

export interface Chord {
    Name?:string;
    Notes: Note[];
}

export interface Note {
    Name?: NoteName;
    Octave?: number;
    Duration: Duration;
    IsDotted: boolean;
    IsPause: boolean;
    Touch?: Touch;
}