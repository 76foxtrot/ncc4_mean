angular.module('app').factory('logger', ['$log', logger]);
function logger($log) {
    'use strict';
    var info = function(message) {
        // add toastr
        $log.info(message);
    };
    var debug = function(message) {
        $log.debug(message);
    };
    var warn = function(message) {
        $log.warn(message);
    };
    var error = function(message) {
        $log.error(message);
    };
    var service =  {
        info: info,
        debug: debug,
        warn: warn,
        error: error
    }
    return service;
}