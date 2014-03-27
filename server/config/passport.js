var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('Users');

module.exports = function() {
    passport.use(new LocalStrategy(
        function(username, password, done) {
            User.findOne({userId: username}).exec(function(err, user) {
                if(user && user.authenticate(password)) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            })
        }
    ));

    passport.serializeUser(function(user, done) {
        if (user) {
            done(null, user._id);
        }
    });

    passport.deserializeUser(function(id, done) {
        User.findOne({ _id : id}).exec(function(err, user) {
            if(user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    });

};

//require('./server/config'); // mongoose || breeze
/*
var userSchema = mongoose.Schema({
    email: String,
    name: String,
    salt: String,
    passwd: String,
    roles: [String]
});
userSchema.methods = {
    authenticate: function(match) {
       return hashPasswd(this.salt, match) === this.passwd;
    }
};

var User = mongoose.model('User');
passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username }).exec(function(err, user) {
            if (user && user.authenticate(password)) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    })
);

passport.serializeUser(function(user, done) {
    if (user) {
        done(null, user._id);
    }
});

passport.deserializeUser(function(id, done) {
    User.findOne({ _id : id}).exec(function(err, user) {
       if(user) {
           return done(null, user);
       } else {
           return done(null, false);
       }
    });
});

// routes for login
var passport = require('passport');
app.post('/login', function(req, res, next) {
    var auth = passport.authenticate('local', function(err, user){
        if (err) { return next(err); }
        if(!user) { res.send({ success : false }); }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            res.send({ success: true, user: user });
        });
    });
    auth(req, res, next);
});

function createSalt() {
    return crypto.randomBytes(128).toString('base64');
}

function hashPasswd(salt, pwd) {
    var hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pwd).digest('hex');
}
*/
