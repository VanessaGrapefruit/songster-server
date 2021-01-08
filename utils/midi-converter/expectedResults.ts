import { Clef, Duration, NoteName } from '../../models/Notations';
import { ChordDisplay, TrackDisplay } from '../../models/TrackDisplayType';

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
            Chords: [
                {
                    Notes: [
                        {
                            Name: NoteName.C,
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
            Chords: [
                {
                    Notes: [
                        {
                            Name: NoteName.G,
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

export { cmajorTrack }