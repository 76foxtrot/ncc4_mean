angular.module('app').controller('addHoursVm', ['$scope', addHoursVm]);
function addHoursVm($scope) {
    $scope.students = [
        { id: 111, name: 'test1' },
        { id: 222, name: 'test2' },
        { id: 333, name: 'test3' },
        { id: 444, name: 'test4' },
        { id: 555, name: 'test5' },
        { id: 667, name: 'test6' }
    ];
    $scope.planes = ['N11111', 'N22222', 'N33333'];
    $scope.addHours = {
        student: undefined,
        flight: undefined,
        ground: undefined,
        comments: undefined,
        tailNumber: undefined,
        isAdd: true
    };
    $scope.save = function() {
        $scope.addHours = {
            student: '',
            flight: 0,
            ground: 0,
            comments: '',
            tailNumber: '',
            isAdd: true
        }
    };
    $scope.cancel = function() {
        $scope.addHours = {
            student: '',
            flight: 0,
            ground: 0,
            comments: '',
            tailNumber: '',
            isAdd: true
        }
    };

};