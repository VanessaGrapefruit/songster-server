import {Router} from "express";

const author_controller = require('../controllers/authorController');
const song_controller = require('../controllers/songController');
const instrument_controller = require('../controllers/instrumentController');
const genre_controller = require('../controllers/genreController');
const difficulty_controller = require('../controllers/difficultyController');

const router = Router();

router.get('/songs/', song_controller.songs_list);

router.get('/songs/:id', song_controller.song_find);

router.post('/songs/', song_controller.songAdd);

router.get('/authors/', author_controller.authors_list);

router.get('/authors/:id', author_controller.author_songs);

router.get('/genre/:id', genre_controller.genre_songs);

router.get('/instruments/:id', instrument_controller.instrument_songs);

router.get('/difficulty-songs/', difficulty_controller.difficulty_songs);

export default router;
