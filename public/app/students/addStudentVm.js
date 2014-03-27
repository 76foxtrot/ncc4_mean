angular.module('app').controller('addStudentVm', ['$scope', '$window', 'logger', 'dataService', addStudentVm]);
function addStudentVm($scope, $window, logger, data) {
    $scope.name = '';
    $scope.email = '';
    $scope.save = function(student) {
        data.addStudent({ name: $scope.name, email: $scope.email })
            .then(function() {
                logger.info('save student', student);
                $window.history.back();
            });
    };
    $scope.cancel = function() {
        $window.history.back();
    }
};