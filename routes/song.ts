import {Router} from "express";
// import * as storage from '../storage/mongo';
import {v4 as uuid} from 'uuid';

const router = Router();

router.get('/', async (req, res, next) => {
  res.send(['song1', 'song2', 'song3'])
});

router.get('/:id', function(req, res, next) {
  res.json(['song1', 'song2', 'song3'])
});

router.post ('/',async function(req, res, next) {
  const id = uuid();
  const { body } = req;
  body.id = id;
  const newBody = await storage.create(body);
  res.json(newBody);
});

export default router;
