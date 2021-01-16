import {Router} from "express";
import { authors_list, author_songs } from "../controllers/authorController";
import { difficulty_songs } from "../controllers/difficultyController";
import { genre_songs } from "../controllers/genreController";
import { instrument_songs } from "../controllers/instrumentController";
import { addSong, addSongPage, FindSongs, FindSongById } from "../controllers/songController";
import multer from 'multer';

const upload = multer();

const router = Router();

router.get('/songs/', FindSongs);

router.get('/songs/id/', FindSongById);

router.post('/addSong/', upload.single('midi'), addSong);

router.get('/addSong/',addSongPage);

router.get('/authors/', authors_list);

router.get('/authors/:id', author_songs);

router.get('/genre/:id', genre_songs);

router.get('/instruments/:id', instrument_songs);

router.get('/difficulty-songs/', difficulty_songs);

export default router;
