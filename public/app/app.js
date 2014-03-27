angular.module('app', ['ngResource', 'ngRoute', 'ui.bootstrap', 'restangular']);
angular.module('app').value('lodash', window._);
angular.module('app').value('moment', window.moment);

angular.module('app').config(function($routeProvider, $locationProvider, RestangularProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider
        .when('/welcome', { templateUrl: 'app/main/welcome.html' })
        .otherwise({ redirectTo: '/welcome'});
});
angular.module('app')
    .run(function($route, $location, $rootScope) {
        //$route.reload();  // issue with blank page on intial route
    });
