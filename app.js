var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var app = express();

var tvshowSchema = new Schema ({
    title: {type: String},
    year: {type: Number},
    country: {type: String},
    poster: {type: String},
    seasons: {type: String},
    genre: {type: String, enum:
        ['Drama', 'Fantasy', 'Sc-Fi', 'Thriller', 'Comedy']
    },
    sumary: {type: String}
});

mongoose.connect('mongodb://localhost/tvshows', function(err, res){
    if(err) throw err;
    console.log('Que bien carnal te conectastes a la BASE DE DATOS');
});

var model = require('./models/tvshow')(app, mongoose);

module.exports = mongoose.model('TVShow', tvshowSchema);

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, function () {
    console.log("Imiciando mi server bonito :D");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;