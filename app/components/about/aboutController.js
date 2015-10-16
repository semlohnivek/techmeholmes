angular.module('app.components.examples.aboutController', [])
        .controller('aboutController', ['$rootScope', '$scope', '$location', '$timeout', '$http', function ($rootScope, $scope, $location, $timeout, $http) { 
        
   $scope.hello = "Hello from the about controller";
}]);


