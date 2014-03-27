var passport = require('passport');

var auth = require('../auth/auth');
module.exports = function(app) {
    app.post('/login', auth.authenticate);
    app.get('/logout', auth.logout );
    app.post('/logout', auth.logout );
};
