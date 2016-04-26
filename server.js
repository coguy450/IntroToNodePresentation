'use strict';
var express = require('express'),
     app = express();
var path = require('path');
var bodyParser = require('body-parser');
 //   mongodb = require('mongodb');
var swig  = require('swig');
// var controller = require('./app/controllers/server.controller.js');

// mongodb.connect('mongodb://localhost/fastMEAN');

app.set('view engine', 'html');
app.set('view options', {
    layout: false
});

app.engine('html', swig.renderFile);
app.set('view cache', false);
// To disable Swig's cache, do the following:
swig.setDefaults({ cache: false });
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function(req,res) {
    res.render('index');
});

//pp.get('/',controller.index);
//app.get('/pres', controller.presentation);

var server = app.listen('3000', function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening at port:'+ port);
});

// catch 404 and forward to error handler

app.use(function(req, res, next) {
    console.log(req.url);
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
       console.log(err);
    });
}


module.exports = app;



