var Genre = require('../models/Genre');

exports.genres_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre list');
};

exports.genre_songs = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre detail: ' + req.params.id);
};