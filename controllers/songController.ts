import Song from '../models/Song';
import express from 'express';
import * as fs from 'fs';
import Author from '../models/Author';
import path from "path";
import { MidiConverter } from '../utils/midi-converter/midiConverter';

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
    console.log('get all songs');
    Song.find({}, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
};

//http://localhost:3000/collection/songs/:id/?id=5ffdbea015b5b43508c75633
exports.song_find = function (req, res: express.Response): void {
    console.log('find one song');
    const id = req.query.id;
    console.log(id);
    Song.findById(id,function(err,result) {
        const midiData : Buffer = result.midi;
        const midiConverter = new MidiConverter(midiData);
        res.header("Access-Control-Allow-Origin: http://localhost:8080");
        res.send(midiConverter.convert());
    });
    // Song.findOne({name: req.body.name, author: req.body.author}, function (err, result) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         res.send(result);
    //     }
    // });
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

