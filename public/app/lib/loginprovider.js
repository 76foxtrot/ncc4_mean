angular.module('app').factory('LoginCall', ['Restangular', loginCall]);
function loginCall(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setBaseUrl('/');
    });
};