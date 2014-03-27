angular.module('app').controller('addHoursVm', ['$window', '$scope', 'dataService', addHoursVm]);
function addHoursVm($window, $scope, ds) {
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
    $scope.students = [];
    $scope.planes = [];
    $scope.addHours = mt();
    $scope.save = function() {
        var newHours = $scope.addHours;
        ds.addHours(newHours)
            .then(function() {
                $scope.addHours = mt();
                $window.history.back();
            });
    };
    $scope.cancel = function() {
        $scope.addHours = mt();
        $window.history.back();
    };

    function updateScope() {
        ds.getStudents()
            .then(function(data) {
                var students = _.map(data.students, function(student) {
                    return {
                        id: student.id,
                        name: student.name
                    };
                });
                $scope.students = students;
                $scope.planes = ds.planes();
            });
    };
    updateScope();
};