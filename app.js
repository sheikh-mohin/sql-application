const createError = require('http-errors');
const express = require('express');
const cors = require("cors");
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "token");
  next();
});

require('./router')(app, express);

require("./config/db.config");

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res["locals"].message = err["message"];
  res["locals"].error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res['status'](err["status"] || 500);
  res['render']('error');
});

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;
app.listen(port, host, function () {
  console.log(`Server started at http://localhost:${port}/api/v1`);
});