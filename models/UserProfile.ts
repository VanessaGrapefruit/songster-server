import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    favoriteSongs: [{type: Schema.Types.ObjectId, ref: 'song'}]
});

module.exports = mongoose.model('UserProfile', GenreSchema);