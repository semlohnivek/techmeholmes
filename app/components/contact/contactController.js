angular.module('app.components.examples.contactController', [])
        .controller('contactController', ['$rootScope','$scope', 'Email', 'ModalMessage', '$timeout', function ($rootScope, $scope, Email, ModalMessage, $timeout) {

                $scope.hello = "Hello from the contact controller";
                $scope.showMessageSentAlert = false;
                $scope.ready = true;

                $scope.formData = {};

                $scope.submit = function () {
                    $scope.showMessageSentAlert = false;
                    $scope.ready = false;

                    Email.send($scope.first, $scope.last, $scope.email, $scope.message)
                    .then(function (response) {
                        $scope.contactForm.$setPristine();
                        $scope.contactForm.$setUntouched();
                        $scope.ready = true;
                        $scope.showMessageSentAlert = true;
                        $scope.formData = {};   
                    });

               };

            }]);


