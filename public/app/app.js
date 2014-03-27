angular.module('app', ['ngResource', 'ngRoute', 'ui.bootstrap', 'restangular']);
angular.module('app').value('lodash', window._);
angular.module('app').value('moment', window.moment);

angular.module('app').config(function($routeProvider, $locationProvider, RestangularProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider
        .when('/welcome', { templateUrl: 'app/main/welcome.html' })
        .when('/dashboard', { templateUrl: 'app/main/dashboard.html', controller: 'dashboardVm' })
        .when('/students', { templateUrl: 'app/students/students.html', controller: 'studentsVm' })
        .when('/students/add', { templateUrl: 'app/students/addstudent.html', controller: 'addStudentVm' })
        .when('/student/:id', { templateUrl: 'app/students/student.html', controller: 'studentVm' })
        .when('/hours', { templateUrl: 'app/hours/hours.html', controller: 'hoursVm' })
        .when('/hours/add/:id', { templateUrl: 'app/hours/addhours.html', controller: 'addHoursVm' })
        .otherwise({ redirectTo: '/dashboard'});
});
angular.module('app')
    .run(function($route, $location, $rootScope) {
        //$route.reload();  // issue with blank page on intial route
    });
