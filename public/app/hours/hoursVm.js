angular.module('app').controller('hoursVm', ['$scope', 'lodash', 'dataService', hoursVm]);
function hoursVm ($scope, _, data) {
    $scope.filterText = '';
    data.getAllHours()
        .then(function(hours) {
          $scope.hours = _.flatten(hours);
        });
};
