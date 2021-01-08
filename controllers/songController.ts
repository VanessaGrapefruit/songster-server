const Song = require('../models/Song');

exports.songs_list = function(req, res) {
    Song.find({}, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
};

exports.song_find = function(req, res) {
    const param = req.body;
    Song.findOne(param, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
};

exports.songAdd = function(req, res) {
    new Song(req.body).save()
    res.send(req.body);
};
