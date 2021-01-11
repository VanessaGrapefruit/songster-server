import Song from '../models/Song';

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
    const param = req.body.genre;
    Song.find({genre: param}, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
};