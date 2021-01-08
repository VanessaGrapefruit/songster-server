import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SongSchema = new Schema({
    name: {type: String, required: true},
    author: {type: String, required: true},
    genres: [{type: Schema.Types.ObjectId, ref: 'Genre'}],
    difficulty: Number,
    instruments: [{type: Schema.Types.ObjectId, ref: 'Instrument'}],
    tracks: [{type: Schema.Types.ObjectId, ref: 'Track'}],
    text: String
});

SongSchema
    .virtual('url')
    .get(function () {
        return '/song/' + this._id;
    });

module.exports = mongoose.model('Song', SongSchema);