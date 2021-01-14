import Song from '../models/Song';
import express from 'express';
import * as fs from 'fs';
import Author from '../models/Author';
import path from "path";
import {MidiConverter} from '../utils/midi-converter/midiConverter';
import findByParam from "./findFunnc";

function SaveSongInDB(model, modelObj) {
    new model(modelObj).save((function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            console.log(doc)
        }
    }));
}

exports.songs_list = function (req, res): void {
    findByParam(Song, res);
};

//http://localhost:3000/collection/songs/:id/?name=Omen&author=The%20Progidy
exports.song_find = function (req, res: express.Response): void {
    const name = req.query.name;
    const author = req.query.author;
    console.log(name, author);
    Song.findOne({name: name, author: author}, function (err, result) {
        console.log(result)
        // const midiData: Buffer = result.midi;
        // const midiConverter = new MidiConverter(midiData);
        // res.header("Access-Control-Allow-Origin: http://localhost:8080");
        // res.send(midiConverter.convert());
        res.send(result)
    });
};

exports.songAdd = function (req, res) {

    const filePath = path.resolve(__dirname, '../utils/midi-converter/midi/2.mid');
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

    SaveSongInDB(Author, authorObj);
    SaveSongInDB(Song, songObj);

    res.send(req.body);
};

