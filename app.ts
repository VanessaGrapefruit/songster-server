import express from "express";
import cors from 'cors';
import * as path from "path";
import logger from "morgan";
import collectionRouter from "./routes/collection";
import userRouter from "./routes/user";
import mongoose from 'mongoose'

const app = express();
app.use(cors({
    origin: 'http://localhost:8080'
}));

// шаблонизатор (можно будет выбрать другой)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', collectionRouter);
app.use('/user', userRouter);

const uri = 'mongodb+srv://test:test@cluster0.fsbsa.mongodb.net/?retryWrites=true&w=majority';
mongoose
    .connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => {
        console.log('DB Connected!');
    })
    .catch(err => {
        console.log(`DB Connection Error: ${err.message}`);
    });

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.json({
        statusCode: 404
    })
});

// error handler
app.use(function (err, req, res, next) {

    res.json({
        statusCode: 500,
        message: err.message,
        status: err.stack
    });
});

export default app;
