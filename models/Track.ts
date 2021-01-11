import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TrackSchema = new Schema({
    name: {type: String, required: true},
    player: String,
    midi: {type: Object, required: true},
    instrument: String
});

TrackSchema
    .virtual('url')
    .get(function () {
        return '/song/track' + this._id;
    });

module.exports = mongoose.model('Track', TrackSchema);