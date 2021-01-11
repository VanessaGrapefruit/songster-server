import express from 'express';
import { hello } from '../controllers/homeController';
const homeRouter = express.Router();

homeRouter.use('/', hello);

export { homeRouter }