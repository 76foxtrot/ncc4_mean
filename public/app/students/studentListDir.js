angular.module('app').directive('studentList', ['$location', studentList]);
function studentList($location){
    return {
        restrict: 'E',
        scope: {
            students: '=',
            search: '='
        },
        templateUrl: 'app/students/studentlistdir.html',
        replace: true,
        link: function(scope, elem, latts) {
            scope.predicate = 'name';
            scope.reverse = 'false';
            scope.gotoStudent = function (s) {
                if (s && s.id){
                    $location.path('/student/' + s.id);
                }
            }
            scope.addStudent = function () {
                $location.path('/student/new')
            }
        }
    }
};