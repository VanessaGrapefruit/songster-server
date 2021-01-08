var Song = require('../models/Song');

exports.songs_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Songs list');
};

exports.song = function(req, res) {
    res.send('NOT IMPLEMENTED: Song detail: ' + req.params.id);
};