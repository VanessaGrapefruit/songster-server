import Song from '../models/Song';
import express from 'express';
import path from "path";
import { MidiConverter } from '../utils/midi-converter/midiConverter';
import { SearchOptions } from '../viewModels/SearchOptions';
import { Midi } from '@tonejs/midi';

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
export async function FindSongs(req: express.Request, res: express.Response) {
    const options = defineSearchOptions(req);
    const instrument = req.query.instrument ? req.query.instrument.toString() : '';
    const queryString = req.query.name ? req.query.name.toString().toLowerCase() : '';

    Song.find(options).select('name author difficulty')
        .exec(function(err,songs) {
            if(err) res.status(404).send("Songs don't founded");
            
            const result = songs.filter((song:any) => {
                const isInstrument = isInstrumentDefined(song,instrument);
                const isQueryString = isQueryStringMatchSong(song,queryString);
                return (isInstrument && isQueryString);
            })
            res.send(result);
        })
};

function defineSearchOptions(req: express.Request) {
    let options = {}
    const keys = ['genre','difficulty'];
    for (const key of keys) {
        if(!req.query[key]) continue;
        options[key] = req.query[key];
    }
    return options;
}

function isInstrumentDefined(song:any, instrument: string) {
    const instruments: string[] = song.instruments;
    if(!instruments) return true;
    return instruments.includes(instrument);
}

function isQueryStringMatchSong(song: any, quaryString: string) {
    if(!quaryString) return true;
    const str = [song.author,song.name].join(' ').toLowerCase();
    for(const word of quaryString.split(' ')) {
        if(!str.includes(word)) return false;
    }
    return true;
}

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
    const midi = new Midi(midiData);
    const instruments = midi.tracks.map(track => track.instrument.name);

    let songObj = {
        name: req.body.name,
        author: req.body.author,
        genre: req.body.genre,
        midi: midiData,
        instruments
    };
    const song = new Song(songObj);
    await song.save();
    
    res.redirect(`/songs/id/?id=${song.id}`);
}

