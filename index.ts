import express from 'express';
import { homeRouter } from './routes/homeRouter';

const app = express();
app.use('/', homeRouter);

app.listen(3000);
console.log('Server started on port 3000');