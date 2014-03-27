angular.module('app').controller('addStudentVm', ['$scope', '$window', addStudentVm]);
function addStudentVm($scope, $window) {
    $scope.name = '';
    $scope.email = '';
    $scope.save = function(student) {
        console.log('save');
    };
};