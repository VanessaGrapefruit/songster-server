import * as mongoose from 'mongoose';
import * as express from "express";
import * as path from "path";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";
import songRouter from "./routes/song";
import userRouter from "./routes/user";

const app = express();

// шаблонизатор (можно будет выбрать другой)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/song', songRouter);
app.use('/user', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.json({
    statusCode: 404
  })
});

// error handler
app.use(function(err, req, res, next) {

  res.json({
    statusCode: 500,
    message: err.message,
    status: err.stack
  });
});

export default app;
