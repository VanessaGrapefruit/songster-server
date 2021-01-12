import Author from '../models/Author';
import Song from '../models/Song';

exports.authors_list = function(req, res): void {
    Author.find({}, function (err, result) {
        if (err) {
            throw new Error(err);
        } else {
            res.json(result);
        }
    })
};

exports.author_songs = function(req, res): void {
    Song.find({author: req.body.author}, function (err, result) {
        if (err) {
            throw new Error(err);
        } else {
            res.send(result)
        }
    })
};

