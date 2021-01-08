import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    login: {type: String, required: true},
    email: String,
    password: {type: String, required: true},
    userProfile: {type: Schema.Types.ObjectId, ref: 'UserProfile'}
});

module.exports = mongoose.model('User', GenreSchema);