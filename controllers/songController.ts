import Song from '../models/Song';
import express from 'express';
import path from "path";
import { MidiConverter } from '../utils/midi-converter/midiConverter';
import { SearchOptions } from '../viewModels/SearchOptions';

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

//http://localhost:3000/songs/?name=Enter Sandman&author=Metallica
export function FindSongs(req: express.Request, res: express.Response): void {
    console.log('Get songs');
    const options: SearchOptions = req.query;
    Song.find(options,{name:1,author:1,difficulty:1})
        .exec(function (err, result) {
            if (err) res.sendStatus(404);

            res.send(result);
        });
};

//http://localhost:3000/songs/id/?id=6000521b6a4f1508a4233e03
export function FindSongById(req:express.Request, res: express.Response) {
    console.log('Find song by id');

    const id = req.query.id;
    Song.findById(id,function(err,result) {
        if(err || !result) res.sendStatus(404);

        const midiData = result.midi;
        const converted = new MidiConverter(midiData).convert();
        converted.Name = result.name;
        converted.Author = result.author;
        converted.Difficulty = result.difficulty;

        res.json({ midiData, converted });
    });
};

export function addSongPage(req: express.Request, res: express.Response) {
    const url = path.resolve(__dirname,'../views/addSong.html');
    res.sendFile(url);
}

export async function addSong(req, res: express.Response) {
    console.log('add file to db');
    const midiData = req.file.buffer;

    let songObj = {
        name: req.body.name,
        author: req.body.author,
        genre: req.body.genre,
        midi: midiData,
    };
    const song = new Song(songObj);
    await song.save();
    
    res.redirect(`/songs/id/?id=${song.id}`);
}

