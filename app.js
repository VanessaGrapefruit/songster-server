"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var song_1 = require("./routes/song");
var user_1 = require("./routes/user");
var app = express();
// шаблонизатор (можно будет выбрать другой)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/song', song_1.default);
app.use('/user', user_1.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.json({
        statusCode: 404
    });
});
// error handler
app.use(function (err, req, res, next) {
    res.json({
        statusCode: 500,
        message: err.message,
        status: err.stack
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map