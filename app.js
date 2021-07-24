const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()


const mongodb = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.pcxvd.mongodb.net/inventario-libros?retryWrites=true&w=majority`
mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;
db.on("error", console.error.bind(console.error, "Mongoose connection error: "))

const indexRouter = require('./routes/index');
const formRouter = require('./routes/form')
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/form', formRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
