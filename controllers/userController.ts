// exports.create_song = function(req, res): void {
//     res.sendFile(path.join(__dirname + '/index.html'));
// };




















// Author.findOne({name: authorObj.name},function (err, mod): void {
//     if (mod && mod._id !== songObj.authorId) {
//         Song.updateMany({author: songObj.author}, { $set : { authorId: mod._id } }, {new: true}, function (err, doc) {
//             // console.log(doc);
//         });
//     }
// })
//
// Song.find({author: authorObj.name}, function (err, mod): void {
//     newAuthor.songs.push(newSong._id)
//     const ids = mod.map(el => el._id)
//     saveItemIfNotExist(Author, authorObj, newAuthor)
//     Author.findOneAndUpdate({name: authorObj.name}, { $addToSet: { songs: [...ids] } }, {new: true}, function (err, doc) {
//         // console.log(doc);
//     });
// });