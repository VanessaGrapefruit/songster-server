import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: {type: String, required: true, index: { unique: true }},
    genre: {type: String, required: true}
});

AuthorSchema
    .virtual('url')
    .get(function () {
        return '/song/author/' + this._id;
    });

const Author = mongoose.model('Author', AuthorSchema);

export default Author;