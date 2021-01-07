import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const InstrumentSchema = new Schema({
    name: {type: String, required: true},
    songs: [{type: Schema.Types.ObjectId, ref: 'song'}]
});

InstrumentSchema
    .virtual('url')
    .get(function () {
        return '/song/instrument' + this._id;
    });

module.exports = mongoose.model('Genre', InstrumentSchema);