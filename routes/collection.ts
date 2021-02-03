import {Router} from 'express';
import * as authentificationController from '../controllers/authController';
import * as favoriteSongsController from '../controllers/favoriteSongsController'

const router = Router();

router.get('/signup', authentificationController.singUpGet);
router.get('/login', authentificationController.logInGet);
router.post('/signup', authentificationController.singUpPost);
router.post('/login', authentificationController.logInPost);
router.get('/logout', authentificationController.logOutpGet);

router.post('/favorite-songs-add', favoriteSongsController.favoriteSongsAdd);
router.delete('/favorite-songs-delete', favoriteSongsController.favoriteSongsDelete);
router.get('/favorite-songs', favoriteSongsController.favoriteSongsList);

export default router;