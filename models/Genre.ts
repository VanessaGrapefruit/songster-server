import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name: {type: String, required: true},
    songs: [{type: Schema.Types.ObjectId, ref: 'song'}],
    authors: [{type: Schema.Types.ObjectId, ref: 'author'}]
});

GenreSchema
    .virtual('url')
    .get(function () {
        return '/song/genre/' + this._id;
    });

module.exports = mongoose.model('Genre', GenreSchema);