import User from '../models/User';
import Song from '../models/Song';
import mongoose from "mongoose";



export async function favorite_add(req, res) {

    const loggedUser = await User.findById(req.query.idUser, function (err, user) {
        if(err) res.sendStatus(404);
    })

    const song = await Song.findById(req.query.idSong, function (err, user) {
        if(err) res.sendStatus(404);
    })

    const isInArray = loggedUser.favoriteSongs.some(function (song) {
        return song.equals(song._id);
    })

    if (!isInArray) {
        loggedUser.favoriteSongs.push(song)
        loggedUser.save()
    }

    res.send(loggedUser);
}

export async function favorite_delete (req, res) {

    const loggedUser = await User.findById(req.query.idUser, function (err, user) {
        if(err) res.sendStatus(404);
    })

    const song = await Song.findById(req.query.idSong, function (err, user) {
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