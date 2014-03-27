angular.module('app').directive('addStudentForm', ['$compile', addStudent]);
function addStudent($compile) {
    return {
        restrict: 'E',
        scope: {
            onSave: '&',
            onCancel: '&',
            onDelete: '&',
            isAdd: '=',
            name: '=',
            email: '=',
            title: '='
        },
        templateUrl: 'app/students/addstudentdir.html',
        replace: true,
        require: '',
        transclude: false,
        compile: function(element, catts) {
            return function(scope, element, latts) {
                var saveExpression = scope.onSave();
                var delExpression = scope.onDelete();
                scope.title = scope.title === '' ? 'Add/Update Student' : scope.title;
                scope.save = function() {
                    saveExpression( { name: scope.name, email: scope.email });
                };
                scope.cancel = function() {
                    scope.onCancel();
                };
                scope.delete = function() {
                    delExpression({ name: scope.name, email: email });
                };
            }
        }
    }
}