import Author from '../models/Author';
import Song from '../models/Song';
import findByParam from './findFunnc'

exports.authors_list = function(req, res): void {
    findByParam(Author, res);
};

exports.author_songs = function(req, res): void {
    const objParam = {author: req.body.author}
    findByParam(Song, res, objParam);
};

