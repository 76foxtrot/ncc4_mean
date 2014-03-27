angular.module('app')
    .controller('studentVm',
               ['$scope',
                '$window',
                '$routeParams',
                'logger',
                'dataService',
                studentVm]);

function studentVm ($scope, $window, $routeParams, logger, data) {
    $scope.student = {};
    data.getStudent($routeParams.id)
        .then(function(student) {
            $scope.student = student;
        });

    $scope.save = function(){
        data.updateStudent({ id: $routeParams.id, name: $scope.student.name, email: $scope.student.email })
            .then(function() {
                logger.info('Student updated.');
                $window.history.back();
            });
    };

    $scope.remove = function(){
        data.removeStudent($routeParams.id)
            .then(function() {
                logger.info('Student removed.');
                $window.history.back();
            });
    };

    $scope.cancel = function(){
        $window.history.back();
    };
};
