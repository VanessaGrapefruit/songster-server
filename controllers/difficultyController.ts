import Song from '../models/Song';

enum difficulty {
    Beginner,
    Intermediate,
    Advanced
}

exports.difficulty_songs = function(req, res): void {
    const param = req.body.difficulty;
    Song.find({difficulty: param}, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
};