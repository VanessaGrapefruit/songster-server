import Song from '../models/Song';

enum difficulty {
    Beginner,
    Intermediate,
    Advanced
}

export function difficulty_songs(req, res): void {
    const param = req.body.difficulty;
    Song.find({difficulty: param}, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
};