var express = require('express');
var passport = require('passport');

module.exports = function(app, config) {
    app.configure (function () {
        app.set('views', config.rootPath + '/server/views');
        //app.set('view engine', 'ejs');
        app.engine('html', require('ejs').renderFile);
        app.use(express.logger('dev'));
        app.use(express.cookieParser());
        app.use(express.bodyParser());
        app.use(express.session( { secret: 'ame flight training' } ));
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(express.static(config.rootPath + '/public')); // anything out of public, just serve it
    });
}
