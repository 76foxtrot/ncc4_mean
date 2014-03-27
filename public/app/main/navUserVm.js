angular.module('app').controller('navUserVm', function($scope, $location, identityMd, authSvc) {
    $scope.username = '';
    $scope.password = '';
    $scope.identity = identityMd;
    $scope.signin = function() {
        authSvc.login($scope.username, $scope.password)
            .then(function(success) {
                $scope.password = '';
                $location.path('/dashboard')
            });
    };
    $scope.signout = function() {
        authSvc.logout()
            .then(function() {
                $scope.username = '';
                $scope.password = '';
                $location.path('/welcome');
            });
    };
});
