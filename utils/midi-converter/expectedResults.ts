import { Alteration, Clef, Duration, NoteName } from '../../models/Notations';
import { TrackDisplay } from '../../models/TrackDisplayType';

const cmajorTrack : TrackDisplay = {
    Instrument: "acoustic grand piano",
    Bpm: 120,
    Size: {
        Count: 4,
        Per: 4
    },
    Clef: Clef.Treble,
    Key: NoteName.C,
    Measures: [
        {
            Id: 0,
            Time: 0,
            Chords: [
                {
                    Notes: [
                        {
                            Name: NoteName.C,
                            Alteration: undefined,
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Quarter,
                            IsPause: false,
                        }
                    ]
                },
                {
                    Notes: [
                        {
                            Name: NoteName.D,
                            Alteration: undefined,
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Quarter,
                            IsPause: false,
                        }
                    ]
                },
                {
                    Notes: [
                        {
                            Name: NoteName.E,
                            Alteration: undefined,
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Quarter,
                            IsPause: false,
                        }
                    ]
                },
                {
                    Notes: [
                        {
                            Name: NoteName.F,
                            Alteration: undefined,
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Quarter,
                            IsPause: false,
                        }
                    ]
                }
            ]
        },
        {
            Id: 1,
            Time: 1536,
            Chords: [
                {
                    Notes: [
                        {
                            Name: NoteName.G,
                            Alteration: undefined,
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Quarter,
                            IsPause: false,
                        }
                    ]
                },
                {
                    Notes: [
                        {
                            Name: NoteName.A,
                            Alteration: undefined,
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Quarter,
                            IsPause: false,
                        }
                    ]
                },
                {
                    Notes: [
                        {
                            Name: NoteName.B,
                            Alteration: undefined,
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Quarter,
                            IsPause: false,
                        }
                    ]
                },
                {
                    Notes: [
                        {
                            Name: NoteName.C,
                            Alteration: undefined,
                            Octave: 4,
                            IsDotted: false,
                            Duration: Duration.Quarter,
                            IsPause: false,
                        }
                    ]
                }
            ]
        }
    ]
}

const paused : TrackDisplay = {
    Instrument: "acoustic grand piano",
    Bpm: 120,
    Size: {
        Count: 4,
        Per: 4
    },
    Clef: Clef.Treble,
    Key: NoteName.C,
    Measures: [
        {
            Id: 0,
            Time: 0,
            Chords: [
                {
                    Notes: [
                        {
                            Name: NoteName.C,
                            Alteration: undefined,
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Eighth,
                            IsPause: false,
                        }
                    ]
                },
                {
                    Notes: [
                        {
                            Name: NoteName.E,
                            Alteration: undefined,
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Eighth,
                            IsPause: true,
                        }
                    ]
                },
                {
                    Notes: [
                        {
                            Name: NoteName.E,
                            Alteration: undefined,
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Eighth,
                            IsPause: false,
                        }
                    ]
                },
                {
                    Notes: [
                        {
                            Name: NoteName.G,
                            Alteration: undefined,
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Eighth,
                            IsPause: true,
                        }
                    ]
                },
                {
                    Notes: [
                        {
                            Name: NoteName.G,
                            Alteration: undefined,
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Eighth,
                            IsPause: false,
                        }
                    ]
                },
                {
                    Notes: [
                        {
                            Name: NoteName.A,
                            Alteration: Alteration['#'],
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Eighth,
                            IsPause: true,
                        }
                    ]
                },
                {
                    Notes: [
                        {
                            Name: NoteName.A,
                            Alteration: Alteration['#'],
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Eighth,
                            IsPause: false,
                        }
                    ]
                },
                {
                    Notes: [
                        {
                            Name: NoteName.G,
                            Alteration: undefined,
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Eighth,
                            IsPause: true,
                        }
                    ]
                },
            ]
        },
        {
            Id: 1,
            Time: 1536,
            Chords: [
                {
                    Notes: [
                        {
                            Name: NoteName.G,
                            Alteration: undefined,
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Quarter,
                            IsPause: false,
                        }
                    ]
                },
                {
                    Notes: [
                        {
                            Name: NoteName.A,
                            Alteration: undefined,
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Quarter,
                            IsPause: false,
                        }
                    ]
                },
                {
                    Notes: [
                        {
                            Name: NoteName.B,
                            Alteration: undefined,
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Quarter,
                            IsPause: false,
                        }
                    ]
                },
                {
                    Notes: [
                        {
                            Name: NoteName.C,
                            Alteration: undefined,
                            Octave: 4,
                            IsDotted: false,
                            Duration: Duration.Quarter,
                            IsPause: false,
                        }
                    ]
                }
            ]
        }
    ]
}

const pausedStart : TrackDisplay = {
    Instrument: "acoustic grand piano",
    Bpm: 120,
    Size: {
        Count: 4,
        Per: 4
    },
    Clef: Clef.Treble,
    Key: NoteName.C,
    Measures: [
        {
            Id: 0,
            Time: 0,
            Chords: [
                {
                    Notes: [
                        {
                            Name: NoteName.C,
                            Alteration: undefined,
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Eighth,
                            IsPause: true,
                        }
                    ]
                },
                {
                    Notes: [
                        {
                            Name: NoteName.C,
                            Alteration: undefined,
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Eighth,
                            IsPause: false,
                        }
                    ]
                },
                {
                    Notes: [
                        {
                            Name: NoteName.E,
                            Alteration: undefined,
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Eighth,
                            IsPause: true,
                        }
                    ]
                },
                {
                    Notes: [
                        {
                            Name: NoteName.E,
                            Alteration: undefined,
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Eighth,
                            IsPause: false,
                        }
                    ]
                },
                {
                    Notes: [
                        {
                            Name: NoteName.G,
                            Alteration: undefined,
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Quarter,
                            IsPause: false,
                        }
                    ]
                },
                {
                    Notes: [
                        {
                            Name: NoteName.A,
                            Alteration: Alteration['#'],
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Quarter,
                            IsPause: false,
                        }
                    ]
                },
            ]
        }
    ]
}

const chord : TrackDisplay = {
    Instrument: "acoustic grand piano",
    Bpm: 120,
    Size: {
        Count: 4,
        Per: 4
    },
    Clef: Clef.Treble,
    Key: NoteName.C,
    Measures: [
        {
            Id: 0,
            Time: 0,
            Chords: [
                {
                    Notes: [
                        {
                            Name: NoteName.C,
                            Alteration: undefined,
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Whole,
                            IsPause: false,
                        },
                        {
                            Name: NoteName.G,
                            Alteration: undefined,
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Whole,
                            IsPause: false,
                        },
                        {
                            Name: NoteName.E,
                            Alteration: undefined,
                            Octave: 3,
                            IsDotted: false,
                            Duration: Duration.Whole,
                            IsPause: false,
                        }
                    ]
                }
            ]
        }
    ]
}

export { cmajorTrack, paused, pausedStart, chord }