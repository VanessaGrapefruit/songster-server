import Song from '../models/Song';
const Author = require('../models/Author'); // Ломает newAuthor.songs если поменять на импорт

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
    Song.findOne({name: req.body.name, author: req.body.author}, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
};

exports.songAdd = async function(req, res) {

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

    const lastAuthor = await Author.find({}).sort({_id:-1}).limit(1);
    console.log(lastAuthor);

    Author.findOne({name: authorObj.name},function (err, mod): void {
        if (mod && mod._id !== songObj.authorId) {
            Song.updateMany({author: songObj.author}, { $set : { authorId: mod._id } }, {new: true}, function (err, doc) {
                // console.log(doc);
            });
        }
    })

    Song.find({author: authorObj.name}, function (err, mod): void {
        newAuthor.songs.push(newSong._id)
        const ids = mod.map(el => el._id)
        saveItemIfNotExist(Author, authorObj, newAuthor)
        Author.findOneAndUpdate({name: authorObj.name}, { $addToSet: { songs: [...ids] } }, {new: true}, function (err, doc) {
            // console.log(doc);
        });
    });

    res.send(req.body);
};

