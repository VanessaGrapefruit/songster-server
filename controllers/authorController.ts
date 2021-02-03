import Author from '../models/Author';
import Song from '../models/Song';

export function authors_list(req, res): void {
    Author.find({}, function (err, result) {
        if (err) {
            throw new Error(err);
        } else {
            res.json(result);
        }
    })
};

export function author_songs(req, res): void {
    Song.find({author: req.body.author}, function (err, result) {
        if (err) {
            throw new Error(err);
        } else {
            res.send(result)
        }
    })
};

