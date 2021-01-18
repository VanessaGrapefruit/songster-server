import { format } from 'path';
import Song from '../models/Song';
import { Genre } from '../models/Genre';

export function genre_songs(req, res): void {
    const param = req.body.genre;
    Song.find({genre: param}, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
};