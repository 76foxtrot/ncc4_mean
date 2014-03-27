angular.module('app').controller('dashboardVm', ['$scope', dashboardVm]);
function dashboardVm($scope) {
    $scope.predicate = 'date';
    $scope.reverse = true;

    $scope.save = function() {
        console.log('save');
    };
    $scope.cancel = function() {
        console.log('cancel');
    };

     $scope.currentHours = {
     month: 'March',
     flight: 10,
     ground: 11,
     hours: [
     {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
     {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
     {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
     {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
     {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
     {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
     {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
     {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
     {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
     {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
     {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
     {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
     {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
     {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
     {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
     {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
     {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
     {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 }
     ]
     };
     $scope.numberOfStudents = 13;
     $scope.myHours = 325;
     $scope.students = [
     { id: 111, name: 'test1' },
     { id: 222, name: 'test2' },
     { id: 333, name: 'test3' },
     { id: 444, name: 'test4' },
     { id: 555, name: 'test5' },
     { id: 667, name: 'test6' }
     ];
     $scope.planes = ['N11111', 'N22222', 'N33333'];
};