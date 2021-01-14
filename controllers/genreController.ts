import Song from '../models/Song';
import findByParam from "./findFunnc";
enum GenreList {
    Rock,
    Rap,
    Pop,
    Metal,
    Jazz,
    Electronic,
    Latin,
    Country
}

exports.genre_songs = function(req, res): void {
    const param = {genre: req.body.genre};
    findByParam(Song, res, param);
};