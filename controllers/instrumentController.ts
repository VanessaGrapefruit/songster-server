import Song from '../models/Song';
import { InstrumentType } from '../models/Instrument';

 export function instrument_songs(req, res) {
    const param = req.body.instrument;
    Song.find({instrument: param}, function(err, result): void {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
};