export enum Duration { // size of note in fractions of quarter
    'Whole' = 4,
    'Half' = 2,
    'Quarter' = 1,
    'Eighth' = 0.5,
    'Sixteen' = 0.25,
    'ThirtySecond' = 0.125,

    'WholeWithDot' = 6,
    'HalfWithDot' = 3,
    'QuarterWithDot' = 1.5,
    'EighthWithDot' = 0.75,
    'SixteenWithDot' = 0.375,
    'ThirtySecondWithDot' = 0.1875,

    'EighthTriplet' = 0.33,
    'QuarterTriplet' = 0.67,
    'EighthQuintol' = 0.2,
    'QuarterQuintol' = 0.4
}

export enum Clef {
    'bass',
    'treble',
    'tenor',
    'alto',
    'soprano',
    'percussion',
    'mezzo-soprano',
    'baritone-c',
    'baritone-f',
    'subbass',
    'french',
}

export interface Size { // number of beats per measure = Count/Per
    Count: number;
    Per: number;
}

export enum Touch {
    Staccato,
    Accent,
    Legato,
    NonLegato,
    Marcato
}

export enum NoteName {
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
    'B#'
}

export enum Alteration {
    'b',
    '#',
    'n'
}