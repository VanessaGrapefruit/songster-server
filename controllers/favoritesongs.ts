import User from '../models/User';
import Song from '../models/Song';
import mongoose from "mongoose";
import express from "express";



export async function favorite_add(req: express.Request, res: express.Response) {

    const loggedUser = await User.findById(req.body.userId, function (err, user) {
        if(err) res.sendStatus(404);
    })

    const song = await Song.findById(req.body.songId, function (err, user) {
        if(err) res.sendStatus(404);
    })

    const isInArray = loggedUser.favoriteSongs.includes(song._id);

    if (!isInArray) {
        loggedUser.favoriteSongs.push(song)
        loggedUser.save()
    }

    res.send(loggedUser);
}

export async function favorite_delete (req, res) {

    const loggedUser = await User.findById(req.body.userId, function (err, user) {
        if(err) res.sendStatus(404);
    })

    const song = await Song.findById(req.body.songId, function (err, user) {
        if(err) res.sendStatus(404);
    })

    const id = mongoose.Types.ObjectId(song._id)
    const index = loggedUser.favoriteSongs.indexOf(id)

    if (index !== -1) {
        loggedUser.favoriteSongs.splice(index, 1)
        loggedUser.save()
    }

    res.end()
}

export async function favorite_songs_list (req: express.Request, res: express.Response) {

    const loggedUser = await User.findById(req.query.userId, function (err, user) {
        if(err) res.sendStatus(404);
    })

    const favSongsArray = await loggedUser.favoriteSongs;

    const result = await Song.find({_id:{$in:[...favSongsArray]}});

    res.send(result);
}