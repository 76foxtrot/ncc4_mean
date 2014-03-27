angular.module('app').controller('studentsVm', ['$location', '$scope', 'dataService', studentsVm]);
function studentsVm($location, $scope, data) {
    $scope.filterText = '';
    $scope.students = [];
    data.getStudents().then(function(result) {
        $scope.students = result.students;
    });

    $scope.addStudent = function() {
        $location.path('/students/add');
    }
};
