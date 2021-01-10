const Genre = require('../models/Genre');

enum GenreList {
    Rock,
    Rap,
    Pop,
    Metal,
    Jazz,
    Electronic,
    Latin,
    Country
}

exports.genres_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre list');
};

exports.genre_songs = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre detail: ' + req.params.id);
};