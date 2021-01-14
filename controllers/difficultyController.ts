import Song from '../models/Song';
import findByParam from "./findFunnc";

enum difficulty {
    Beginner,
    Intermediate,
    Advanced
}

exports.difficulty_songs = function(req, res): void {
    const param = {difficulty: req.body.difficulty};
    findByParam(Song, res, param);
};