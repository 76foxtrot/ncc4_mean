var mongoose = require('mongoose');
var encrypt = require('../auth/encryption');

var userSchema = mongoose.Schema({
    userId: {
        type: String,
        required: '{PATH} is required!',
        unique:true
    },
    salt: {
        type:String,
        required:'{PATH} is required!'},
    hashed_pwd: {
        type:String,
        required:'{PATH} is required!'},
    roles: [String]
});
userSchema.methods = {
    authenticate: function(passwordToMatch) {
        return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    },
    hasRole: function(role) {
        return this.roles.indexOf(role) > -1;
    }
};
var User = mongoose.model('Users', userSchema);

exports.createDefaultUsers = createUsers;
function createUsers() {
    User.find({}).exec(function(err, users) {
        if(users.length === 0) {
            var salt, hash;
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'abc123');
            User.create({ userId:'admin', salt: salt, hashed_pwd: hash, roles: ['admin']});
        }
    })
};


