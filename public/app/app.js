angular.module('app', ['ngResource', 'ngRoute', 'ui.bootstrap', 'restangular']);
angular.module('app').value('lodash', window._);
angular.module('app').value('moment', window.moment);

angular.module('app').config(function($routeProvider, $locationProvider, RestangularProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider
        .when('/welcome', { templateUrl: 'app/main/welcome.html' })
        .when('/dashboard', { templateUrl: 'app/main/dashboard.html', controller: 'dashboardVm', requireRoles: '*' })
        .when('/students', { templateUrl: 'app/students/students.html', controller: 'studentsVm', requireRoles: '*' })
        .when('/students/add', { templateUrl: 'app/students/addstudent.html', controller: 'addStudentVm', requireRoles: '*' })
        .when('/student/:id', { templateUrl: 'app/students/student.html', controller: 'studentVm', requireRoles: '*' })
        .when('/hours', { templateUrl: 'app/hours/hours.html', controller: 'hoursVm', requireRoles: '*' })
        .when('/hours/add/:id', { templateUrl: 'app/hours/addhours.html', controller: 'addHoursVm', requireRoles: '*' })
        .otherwise({ redirectTo: '/dashboard'});
    RestangularProvider.setBaseUrl('/api');
});
angular.module('app')
    .run(function($route, $location, $rootScope, identityMd) {
        //$route.reload();  // issue with blank page on intial route
        $rootScope.$on('$routeChangeStart', function(evt, next, current) {
            if(next.requireRoles && next.requireRoles.length > 0) {
                if (!identityMd.isAuthenticated()) {
                    evt.preventDefault();
                    $location.path('/welcome');
                } else if (!identityMd.isAuthorized(next.requireRoles)) {
                    evt.preventDefault();
                    $location.path('/dashboard');
                }
            }
        });
    });
