var express = require('express');
var app = express();

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
require('./server/models')(config);
require('./server/routes')(app);

app.listen(config.appPort);
console.log('Listening on port ' + config.appPort);
