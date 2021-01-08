import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SongSchema = new Schema({
    name: {type: String, required: true},
    author: [{type: String, ref: 'author'}],
    genres: [{type: Schema.Types.ObjectId, ref: 'genre'}],
    difficulty: Number,
    instruments: [{type: Schema.Types.ObjectId, ref: 'instrument'}],
    tracks: [{type: Schema.Types.ObjectId, ref: 'track'}],
    text: String
});

SongSchema
    .virtual('url')
    .get(function () {
        return '/song/' + this._id;
    });

module.exports = mongoose.model('Song', SongSchema);