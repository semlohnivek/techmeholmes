angular.module('app.components.examples.examplesController', [])
        .controller('examplesController', ['$scope', '$location', '$timeout', '$http', function ($scope, $location, $timeout, $http) { 
        
   $scope.hello = "Hello from the examples controller";
}]);


