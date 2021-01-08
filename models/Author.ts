import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: {type: String, required: true},
    songs: [{type: Schema.Types.ObjectId, ref: 'Song'}],
    gengers: [{type: Schema.Types.ObjectId, ref: 'Genre'}]
});

AuthorSchema
    .virtual('url')
    .get(function () {
        return '/song/author/' + this._id;
    });

module.exports = mongoose.model('Author', AuthorSchema);