var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
module.exports = {
    development : {
        rootPath : rootPath,
        dbconn : 'mongodb://localhost/ame',
        appPort: '3006'
    },
    production : {
        rootPath : rootPath,
        appPort: '80'
    }
};
