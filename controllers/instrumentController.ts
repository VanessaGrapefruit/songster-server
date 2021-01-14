import Song from '../models/Song';
import findByParam from "./findFunnc";

enum InstrumentList {
    Guitar,
    Drums,
    Bass
}

exports.instrument_songs = function(req, res) {
    const param = {instrument: req.body.instrument};
    findByParam(Song, res, param);
};