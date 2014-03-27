angular.module('app').controller('hoursVm', ['$scope', hoursVm]);
function hoursVm ($scope) {
    $scope.filterText = '';
    $scope.hours =
    [
        {date: '03/01/2014', name: 'first last 1', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
        {date: '03/01/2014', name: 'first last 2', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
        {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
        {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
        {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
        {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
        {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
        {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
        {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
        {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
        {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
        {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
        {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
        {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
        {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
        {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
        {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
        {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 }
    ];
};
