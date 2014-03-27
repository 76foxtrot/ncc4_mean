angular.module('app').controller('studentsVm', ['$location', '$scope', studentsVm]);
function studentsVm($location, $scope) {
    $scope.filterText = '';
    $scope.students = [
        { id: '1', name: 'first last 1', email: 'abc@abc.net', flight: 10.4, ground: 5.1 },
        { id: '1', name: 'first last 2', email: 'abc@abc.net', flight: 10.4, ground: 5.1 },
        { id: '1', name: 'first last 3', email: 'abc@abc.net', flight: 10.4, ground: 5.1 },
        { id: '1', name: 'first last 4', email: 'abc@abc.net', flight: 10.4, ground: 5.1 },
        { id: '1', name: 'first last 5', email: 'abc@abc.net', flight: 10.4, ground: 5.1 },
        { id: '1', name: 'first last 6', email: 'abc@abc.net', flight: 10.4, ground: 5.1 },
        { id: '1', name: 'first last 7', email: 'abc@abc.net', flight: 10.4, ground: 5.1 },
        { id: '1', name: 'first last 8', email: 'abc@abc.net', flight: 10.4, ground: 5.1 },
        { id: '1', name: 'first last 9', email: 'abc@abc.net', flight: 10.4, ground: 5.1 },
        { id: '1', name: 'first last 10', email: 'abc@abc.net', flight: 10.4, ground: 5.1 },
        { id: '1', name: 'first last 11', email: 'abc@abc.net', flight: 10.4, ground: 5.1 },
        { id: '1', name: 'first last 12', email: 'abc@abc.net', flight: 10.4, ground: 5.1 },
        { id: '1', name: 'first last 13', email: 'abc@abc.net', flight: 10.4, ground: 5.1 }
    ];
    $scope.addStudent = function() {
        $location.path('/students/add');
    }
};
