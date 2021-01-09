// const Instrument = require('../models/Instrument');

exports.instruments_list = function(req, res) {
};

exports.instrument_songs = function(req, res) {
    const param = req.body.instrument;
    Song.find(param, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
};