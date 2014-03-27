angular.module('app').directive('addHoursForm', ['$compile', addHoursForm]);
function addHoursForm($compile) {
    return {
        restrict: 'E',
        scope: {
            hourModel: '=',
            students: '=',
            planes: '=',
            onSave: '&',
            onCancel: '&',
            showDelete: '@',
            onDelete: '&'
        },
        templateUrl: 'app/hours/addhoursdir.html',
        replace: true,
        require: '',
        compile: function(elem, catts) {
            return function(scope, elem, latts) {
                // to call a outside scope method with args
                //var expression = scope.onSave();
                // expression(arg1..);
                scope.save = function() {
                    scope.onSave();
                };
                scope.cancel = function() {
                    scope.onCancel();
                };
                scope.delete = function() {
                    scope.onDelete();
                };
                scope.open = function($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    scope.opened = true;
                };
            };
        }
    }
};