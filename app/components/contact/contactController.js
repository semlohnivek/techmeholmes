angular.module('app.components.examples.contactController', [])
        .controller('contactController', ['$rootScope','$scope', 'Email', 'ModalMessage', '$timeout', function ($rootScope, $scope, Email, ModalMessage, $timeout) {

                $scope.hello = "Hello from the contact controller";
                $scope.showMessageSentAlert = false;
                $scope.ready = true;

                $scope.formData = {};

                $scope.submit = function () {
                    $scope.showMessageSentAlert = false;
                    $scope.ready = false;

                    Email.send($scope.formData.first, $scope.formData.last, $scope.formData.email, $scope.formData.message)
                    .then(function (response) {
                        $scope.contactForm.$setPristine();
                        $scope.contactForm.$setUntouched();
                        $scope.ready = true;
                        $scope.showMessageSentAlert = true;
                        $scope.formData = {};   
                    });

               };

            }]);


