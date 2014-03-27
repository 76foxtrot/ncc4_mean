angular.module('app').factory('identityMd', ['$window', '$resource', 'lodash', identityMd]);
function identityMd ($window, $resource, _) {
    var currentUser = undefined;

    var isAuthenticated = function() {
        return !!this.currentUser;
    };
    var isAuthorized = function(roles) {
        //return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
        var isOk = angular.isArray(roles)
            ? roles.indexOf('*') > -1 || _.intersection(this.currentUser.roles, roles).length > 0
            : roles === '*';
        return !!this.currentUser && isOk;
    };
    return {
        currentUser: currentUser,
        isAuthenticated: isAuthenticated,
        isAuthorized:isAuthorized
    };
};