import { Duration, Clef, Size, Touch, NoteName, Alteration } from './Notations';

export interface SongDisplay {
    Tracks: TrackDisplay[];
    Name: string;
    Author: string;
    Difficulty: number;
}

export interface TrackDisplay {
    Instrument: string;
    Name?: string;
    Author?: string;
    
    Bpm: number;
    Key: NoteName;
    Clef: Clef;
    Size: Size;  //number of beats per measure
    Measures: MeasureDisplay[];
}

export interface MeasureDisplay {
    Id?: number;
    Time?: number;
    Chords: ChordDisplay[];  // sum of all notes durations must be equal to size!!!
}

export interface ChordDisplay {
    Name?:string;
    Notes: NoteDisplay[];
}

export interface NoteDisplay {
    Name: NoteName;
    Alteration?: Alteration;
    Octave?: number;
    Duration: Duration;
    IsDotted: boolean;
    IsPause: boolean;
    Touch?: Touch;
}