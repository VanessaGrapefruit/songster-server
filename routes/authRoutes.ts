import {Router} from "express"
import * as songControllers from "../controllers/songController"
import multer from 'multer'

const upload = multer()
const router = Router()

router.get('/songs/', songControllers.findSongs)
router.get('/songs/id/', songControllers.findSongById)
router.post('/addSong/', upload.single('midi'), songControllers.addSong)
router.get('/addSong/', songControllers.addSongPage)

export default router


