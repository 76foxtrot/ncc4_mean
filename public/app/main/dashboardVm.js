angular.module('app').controller('dashboardVm', ['$scope', 'lodash', 'moment', 'dataService', dashboardVm]);
function dashboardVm($scope, _, moment, ds) {
    var dt = new Date();
    var mt = function() {
        return {
            date: dt,
            student: undefined,
            flight: undefined,
            ground: undefined,
            comments: undefined,
            tailNumber: undefined,
            isAdd: true
        }
    };
    $scope.predicate = 'date';
    $scope.reverse = true;
    $scope.currentHours = [];
    $scope.numberOfStudents = 0;
    $scope.myHours = 325;
    $scope.students = [];
    $scope.planes = [];
    $scope.addHours = mt();

    $scope.save = function() {
        var newHours = $scope.addHours;
        ds.addHours(newHours)
            .then(function() {
                $scope.addHours = mt();
                updateScope();
            });
    };
    $scope.cancel = function() {
        $scope.addHours = mt();
    };

    function updateScope() {
    ds.getStudents()
        .then(function(data) {
            $scope.numberOfStudents = data.students.length;
            var month = moment().format("MMMM YYYY");
            var students = _.map(data.students, function(student) {
                return {
                    id: student.id,
                    name: student.name
                };
            });
            $scope.students = students;
            $scope.planes = ds.planes();
            var hours = ds.currentHoursList();
            var tot = { f: 0, g: 0 };
            _.forEach(hours, function(hr) {
                tot.f += hr.flight;
                tot.g += hr.ground;
            });
            $scope.currentHours = {
                month: month,
                flight: tot.f,
                ground: tot.g,
                hours: hours
            };
        });
    };
    updateScope();
    /*
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
     */
};