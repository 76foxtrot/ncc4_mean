angular.module('app').factory('authSvc', ['LoginCall', '$q', 'identityMd', authSvc]);
function authSvc(api, $q, identityMd) {
    var login = function(user, passwd) {
        var dfd = $q.defer();
        //identityMd.currentUser = { email: 'abc@abc.net', username: 'Instructor A', role: 'instructor' };
        //dfd.resolve(true);
        api.one('login').customPOST({ username: user, password: passwd })
            .then(function(result) {
                if(result.success) {
                    identityMd.currentUser = {
                        username: result.user,
                        email: result.email,
                        roles: result.roles
                    }
                    dfd.resolve(true);
                } else {
                    dfd.resolve(false);
                }
            });
        return dfd.promise;
    };
    var logout = function() {
        var dfd = $q.defer();
        //identityMd.currentUser = undefined;
        //dfd.resolve(true);
        api.one('logout').customPOST({ })
            .then(function() {
                identityMd.currentUser = undefined;
                dfd.resolve(true);
            });
        return dfd.promise;
    };

    return {
        login: login,
        logout: logout
    };
};