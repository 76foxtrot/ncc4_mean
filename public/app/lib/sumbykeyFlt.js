// http://cacodaemon.de/index.php?id=55
angular.module('app')
    .filter('sumByKey', ['lodash', function (_) {
        return function(data, key) {
            if (typeof (data) === 'undefined' || typeof (key) === 'undefined' || (angular.isArray(data) && data.length == 0)) {
                return 0;
            }
            var sum = 0;
            return _.isNumber(data[0][key])
                ? _.reduce(data, function(sum,n) {
                                    return sum += _.isNumber(n[key]) ? parseFloat(n[key]) : 0
                                 } , 0)
                : data.length;
           /*
            for (var i = data.length - 1; i >= 0; i--) {
                sum += parseFloat(data[i][key]);
            }
            return sum;
            */
        };
    }]);
