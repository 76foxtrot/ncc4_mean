angular.module('app').controller('studentVm', ['$scope', '$window', '$routeParams', studentVm]);

function studentVm ($scope, $window, $routeParams) {
    $scope.student = {};
    $scope.student = {
        hours:
        [
            {date: '03/01/2014', name: 'first last 1', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
            {date: '03/01/2014', name: 'first last 2', tailNumber: 'N12345', flight: 1.2, ground: 1.0 },
            {date: '03/01/2014', name: 'first last', tailNumber: 'N12345', flight: 1.2, ground: 1.0 }
        ],
        name: 'test1',
        email: 'abc@abc.net'
    };

    $scope.save = function(){
        console.log('save');
        $window.history.back();
    };

    $scope.remove = function(){
        console.log('remove');
        $window.history.back();
    };

    $scope.cancel = function(){
        $window.histor.back();
    };
};
