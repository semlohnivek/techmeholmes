angular.module('app.shared.resume.resumeCtrl', [])

.controller('resumeCtrl', ['$rootScope', '$scope', '$http', '$uibModalInstance', function ($rootScope, $scope, $http, $uibModalInstance) { 
        
        $scope.skillOrder = 'name';
        $scope.orderReverse = false;

        $http.get('app/shared/resume/resume.json')
        	.then(function(response) {
        		$scope.resume = response.data;
        	});

        $scope.close = function()  {
        	$uibModalInstance.dismiss();
        }

}]);