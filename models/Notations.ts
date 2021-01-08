export enum Duration { // size of note in fractions of quarter
    Whole = 'w',
    Half = 'h',
    Quarter = 'q',
    Eighth = '8',
    Sixteen = '16',
    ThirtySecond = '32',

    WholeWithDot = 'wd',
    HalfWithDot = 'hd',
    QuarterWithDot = 'qd',
    EighthWithDot = '8d',
    SixteenWithDot = '16d',
    ThirtySecondWithDot = '32d',

    EighthTriplet = 0.33,
    QuarterTriplet = 0.67,
    EighthQuintol = 0.2,
    QuarterQuintol = 0.4
}

const DurationCoeffs = {
    4: Duration.Whole,
    2: Duration.Half,
    1: Duration.Quarter,
    0.5: Duration.Eighth,
    0.25: Duration.Sixteen,
    0.125: Duration.ThirtySecond,

    6: Duration.WholeWithDot,
    3: Duration.HalfWithDot,
    1.5: Duration.QuarterWithDot,
    0.75: Duration.EighthWithDot,
    0.375: Duration.SixteenWithDot,
    0.1875: Duration.ThirtySecondWithDot,
}
export { DurationCoeffs }

export enum Clef {
    Bass = 'bass',
    Treble = 'treble',
    Tenor = 'tenor',
    Alto = 'alto',
    Soprano = 'soprano',
    Percussion = 'percussion',
    MezzoSoprano = 'mezzo-soprano',
    BaritoneC = 'baritone-c',
    BaritoneF = 'baritone-f',
    SubBass = 'subbass',
    French = 'french',
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
    C = 'c',
    D = 'd',
    E = 'e',
    F = 'f',
    G = 'g',
    A = 'a',
    B = 'b'
}

export enum Alteration {
    'b',
    '#',
    'n'
}