import {Router} from 'express';
import {singup_get, login_get, singup_post, login_post, logout_get} from '../controllers/authController';
import {favorite_add, favorite_delete} from '../controllers/favoritesongs'
const router = Router();

router.get('/signup', singup_get);
router.get('/login', login_get);
router.post('/signup', singup_post);
router.post('/login', login_post);
router.get('/logout', logout_get);
router.post('/favorite-songs-add', favorite_add);
router.post('/favorite-songs-delete', favorite_delete);

export default router;