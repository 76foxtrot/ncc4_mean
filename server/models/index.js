var mongoose = require('mongoose');
var config = require('../config/config')
var path = require('path');
var fs = require('fs');

module.exports = function(config) {
    mongoose.connect(config.dbconn);
    mongoose.connection.on('connected', function() {
        console.log('DB Connection opened to ' + config.dbconn);
    });

    mongoose.connection.on('disconnected', function() {
        console.log('DB Connection to' + config.dbconn + ' closed');
    });

    mongoose.connection.on('error',function (err) {
        console.log('Db connection error: ' + err);
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function () {
            console.log('DB connection disconnected through app termination');
            process.exit(0);
        });
    });
    var dataDir = __dirname;
    var files = fs.readdirSync(dataDir);
    files.forEach(function (file) {
        if (file !== 'index.js') {
            var filePath = path.resolve('./', dataDir, file);
            var model = require(filePath);
            console.log('Adding data model ', filePath);
            //model();
        }
    });
};

