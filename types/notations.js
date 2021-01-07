"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteName = exports.Touch = exports.Clef = exports.Duration = void 0;
var Duration;
(function (Duration) {
    Duration[Duration["Whole"] = 4] = "Whole";
    Duration[Duration["Half"] = 2] = "Half";
    Duration[Duration["Quarter"] = 1] = "Quarter";
    Duration[Duration["Eighth"] = 0.5] = "Eighth";
    Duration[Duration["Sixteen"] = 0.25] = "Sixteen";
    Duration[Duration["ThirtySecond"] = 0.125] = "ThirtySecond";
    Duration[Duration["WholeWithDot"] = 6] = "WholeWithDot";
    Duration[Duration["HalfWithDot"] = 3] = "HalfWithDot";
    Duration[Duration["QuarterWithDot"] = 1.5] = "QuarterWithDot";
    Duration[Duration["EighthWithDot"] = 0.75] = "EighthWithDot";
    Duration[Duration["SixteenWithDot"] = 0.375] = "SixteenWithDot";
    Duration[Duration["ThirtySecondWithDot"] = 0.1875] = "ThirtySecondWithDot";
    Duration[Duration["EighthTriplet"] = 0.33] = "EighthTriplet";
    Duration[Duration["QuarterTriplet"] = 0.67] = "QuarterTriplet";
    Duration[Duration["EighthQuintol"] = 0.2] = "EighthQuintol";
    Duration[Duration["QuarterQuintol"] = 0.4] = "QuarterQuintol";
})(Duration = exports.Duration || (exports.Duration = {}));
var Clef;
(function (Clef) {
    Clef[Clef["Bass"] = 0] = "Bass";
    Clef[Clef["Treble"] = 1] = "Treble";
})(Clef = exports.Clef || (exports.Clef = {}));
var Touch;
(function (Touch) {
    Touch[Touch["Staccato"] = 0] = "Staccato";
    Touch[Touch["Accent"] = 1] = "Accent";
    Touch[Touch["Legato"] = 2] = "Legato";
    Touch[Touch["NonLegato"] = 3] = "NonLegato";
    Touch[Touch["Marcato"] = 4] = "Marcato";
})(Touch = exports.Touch || (exports.Touch = {}));
var NoteName;
(function (NoteName) {
    NoteName[NoteName["C"] = 0] = "C";
    NoteName[NoteName["C#"] = 1] = "C#";
    NoteName[NoteName["D"] = 2] = "D";
    NoteName[NoteName["D#"] = 3] = "D#";
    NoteName[NoteName["E"] = 4] = "E";
    NoteName[NoteName["F"] = 5] = "F";
    NoteName[NoteName["F#"] = 6] = "F#";
    NoteName[NoteName["G"] = 7] = "G";
    NoteName[NoteName["G#"] = 8] = "G#";
    NoteName[NoteName["A"] = 9] = "A";
    NoteName[NoteName["A#"] = 10] = "A#";
    NoteName[NoteName["B"] = 11] = "B";
    NoteName[NoteName["B#"] = 12] = "B#";
})(NoteName = exports.NoteName || (exports.NoteName = {}));
//# sourceMappingURL=notations.js.map