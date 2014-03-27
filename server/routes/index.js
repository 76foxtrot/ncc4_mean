var fs = require('fs');
var path = require('path');

module.exports = function (app){
    //var routeDir = 'routes';
    var routeDir = __dirname;
    var files = fs.readdirSync(routeDir);
    files.forEach(function (file) {
        if (file !== 'index.js') {
            var filePath = path.resolve('./', routeDir, file);
            var route = require(filePath);
            route(app);
            console.log('adding routes from ', filePath);
        }
    });

    // catch all for api routes that don't exist
    app.all('api/*', function(req, res) {
        res.send(404);
    });

    app.get('/', function(req, res) {
        res.render('index.html');
    });
    app.get('/deck', function(req, res) {
        res.render('../../public/deck/ncc4.html');
    });

    /*
    app.get('*', function(req, res) {
        res.render('index.html');
    });
    */
}
