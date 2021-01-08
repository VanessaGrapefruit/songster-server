import {Router} from "express";
import * as storage from '../storage/mongo';
import {v4 as uuid} from 'uuid';

const author_controller = require('../controllers/authorController');
const song_controller = require('../controllers/songController');
const instrument_controller = require('../controllers/instrumentController');
const genre_controller = require('../controllers/genreController');

const router = Router();

router.get('/songs', song_controller.songs_list);

router.get('/songs/:id', song_controller.song_find);

router.post('/songs/:id', song_controller.songAdd);

router.get('/authors', author_controller.authors_list);

router.get('/authors/:id', author_controller.author_songs);

router.get('/genres', genre_controller.genres_list);

router.get('/genres/:id', genre_controller.genre_songs);

router.get('/instruments', instrument_controller.instruments_list);

router.get('/instruments/:id', instrument_controller.instrument_songs);

// router.post ('/',async function(req, res, next) {
//   const id = uuid();
//   const { body } = req;
//   body.id = id;
//   const newBody = await storage.create(body);
//   res.json(newBody);
// });

export default router;
