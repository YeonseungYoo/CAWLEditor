var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ajaxController_sharedComponentProvider = require('./routes/ajaxController/sharedComponentProvider');
var ajaxController_cawlDocumentGenerator = require('./routes/ajaxController/cawlDocumentGenerator');
var ajaxController_cawlDocumentValidationChecker = require('./routes/ajaxController/cawlDocumentValidationChecker');
var ajaxController_cawlDocumentManager = require('./routes/ajaxController/cawlDocumentManager');
var ajaxController_configurationComponentCreater = require('./routes/ajaxController/configurationComponentCreater');
var ajaxController_configurationComponentDeleter = require('./routes/ajaxController/configurationComponentDeleter');
var ajaxController_contextInfoBroker = require('./routes/ajaxController/contextInfoBroker');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ajaxController/sharedComponentProvider', ajaxController_sharedComponentProvider);
app.use('/ajaxController/cawlDocumentGenerator', ajaxController_cawlDocumentGenerator);
app.use('/ajaxController/cawlDocumentValidationChecker', ajaxController_cawlDocumentValidationChecker);
app.use('/ajaxController/cawlDocumentManager', ajaxController_cawlDocumentManager);
app.use('/ajaxController/configurationComponentCreater', ajaxController_configurationComponentCreater);
app.use('/ajaxController/configurationComponentDeleter', ajaxController_configurationComponentDeleter);
app.use('/ajaxController/contextInfoBroker', ajaxController_contextInfoBroker);

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
