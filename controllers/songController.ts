const Song = require('../models/Song');
const Author = require('../models/Author');

function saveItemIfNotExist(model, modelObj, modVar): void {
    model.findOne({name: modelObj.name}, function (err, mod) {
        if (err) console.log(err);
        if (!mod) {
            modVar.save();
        }
    });
}

exports.songs_list = function (req, res): void {
    Song.find({}, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
};

exports.song_find = function (req, res): void {
    const param = req.body;
    Song.findOne(param, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
};

exports.songAdd = function (req, res) {

    const trackObj = {
        name: req.body.track,
        player: req.body.player,
        midi: req.body.midi,
        instrument: req.body.instrument
    };

    let authorObj = {
        name: req.body.author,
        genre: req.body.genre
    };

    const newAuthor = new Author(authorObj);

    let songObj = {
        name: req.body.name,
        author: req.body.author,
        authorId: newAuthor._id,
        difficulty: req.body.difficulty,
        text: req.body.difficulty,
        genre: req.body.genre,
        instrument: req.body.instrument
    };

    const newSong = new Song(songObj)
    saveItemIfNotExist(Song, songObj, newSong);

    Author.findOne({name: authorObj.name},function (err, mod) {
        if (mod && mod._id !== songObj.authorId) {
            Song.findOneAndUpdate({name: songObj.name}, { $set : { authorId: mod._id } }, {new: true}, function (err, doc) {
                console.log(doc)
            });
        }
    })



    Song.find({author: authorObj.name}, function (err, mod) {
        newAuthor.songs.push(newSong._id)
        const ids = mod.map(el => el._id)
        saveItemIfNotExist(Author, authorObj, newAuthor)
        Author.findOneAndUpdate({name: authorObj.name}, { $addToSet: { songs: [...ids] } }, {new: true}, function (err, doc) {
            console.log(doc)
        });
    });



    res.send(req.body);
};

