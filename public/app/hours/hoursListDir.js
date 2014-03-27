angular.module('app').directive('hoursList', [hoursListDir]);
function hoursListDir() {
    return {
        restrict: 'E',
        scope: {
            hours: '=',
            showStudent: '=',
            title: '=',
            search: '='
        },
        templateUrl: 'app/hours/hourslistdir.html',
        replace: true,
        link: function(scope, elem, latts) {
            scope.predicate = 'date';
            scope.reverse = 'true';
            scope.hours = scope.hours && scope.hours.length === 0 ? undefined : scope.hours;
        }
    }
};