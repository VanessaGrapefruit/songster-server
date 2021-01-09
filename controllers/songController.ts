const Song = require('../models/Song');
const Genre = require('../models/Genre');
const Instrument = require('../models/Instrument');
const Author = require('../models/Author');
const Track = require('../models/Track');

function createItemIfNotExist(model, modelObj): void {
    model.findOne({name: modelObj.name}, function(err, mod){
        if(err) console.log(err);
        if (!mod){
            new model(modelObj).save();
        }
    });
};

exports.songs_list = function(req, res): void {
    Song.find({}, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
};

exports.song_find = function(req, res): void {
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

    const songObj = {
        name: req.body.name,
        author: req.body.author,
        difficulty: req.body.difficulty,
        text: req.body.difficulty
    };

    const trackObj = {
        name: req.body.track,
        player: req.body.player,
        midi: req.body.midi,
        instrument: req.body.midi
    };

    const genreObj = {
        name: req.body.genre,
    };

    const instrumentObj = {
        name: req.body.instrument,
    };

    const authorObj = {
        name: req.body.author,
    };

    createItemIfNotExist(Song, songObj);
    createItemIfNotExist(Author, authorObj);
    createItemIfNotExist(Track, trackObj);
    createItemIfNotExist(Genre, genreObj);
    createItemIfNotExist(Instrument, instrumentObj);

    Author.
    findOne({ 'Author.name': 'Валентин стрыкало' }).
    populate('songs').
    exec();

    res.send(req.body)

};

