import Song from '../models/Song';
import * as fs from 'fs';
import Author from '../models/Author';
import path from "path";

function saveItemIfNotExist(model, modelObj): void {
    model.findOne({name: modelObj.name}, async function (err, mod) {
        if (err) console.log(err);
        if (!mod) {
            const doc = await new model(modelObj);
            await doc.save().then(savedDoc => {
                console.log(savedDoc);
            });
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
            res.send(result);
        }
    });
};

exports.songAdd = function(req, res) {

    const filePath = path.resolve(__dirname, '../utils/midi-converter/midi/3.mid');
    const file = fs.readFileSync(filePath);

    let authorObj = {
        name: req.body.author,
        genre: req.body.genre,
    };

    let songObj = {
        name: req.body.name,
        author: req.body.author,
        difficulty: req.body.difficulty,
        text: req.body.difficulty,
        genre: req.body.genre,
        instrument: req.body.instrument,
        midi: file
    };

    saveItemIfNotExist(Author, authorObj);
    saveItemIfNotExist(Song, songObj);


    res.send(req.body);
};

