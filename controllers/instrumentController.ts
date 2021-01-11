import Song from '../models/Song';

enum InstrumentList {
    Guitar,
    Drums,
    Bass
}

exports.instrument_songs = function(req, res) {
    const param = req.body.instrument;
    Song.find({instrument: param}, function(err, result): void {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
};