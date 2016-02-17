angular.module('app.components.home.homeController', [])
        .controller('homeController', ['$rootScope', '$scope', '$uibModal', function ($rootScope, $scope, $uibModal) {
            
            $scope.openResume = function() {
                var modalInstance = $uibModal.open({
                  animation: true,
                  templateUrl: 'app/shared/resume/resumeView.html',
                  controller: 'resumeCtrl',
                  size: 'lg'
                });
            }

        }]);


