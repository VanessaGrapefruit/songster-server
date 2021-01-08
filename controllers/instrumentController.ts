var Instrument = require('../models/Instrument');

exports.instruments_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Instrument list');
};

exports.instrument_songs = function(req, res) {
    res.send('NOT IMPLEMENTED: Instrument detail: ' + req.params.id);
};