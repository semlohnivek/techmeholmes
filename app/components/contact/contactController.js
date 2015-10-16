angular.module('app.components.examples.contactController', [])
        .controller('contactController', ['$rootScope','$scope', 'Email', 'ModalMessage', function ($rootScope, $scope, Email, ModalMessage) {

                $scope.hello = "Hello from the contact controller";
                $scope.showMessageSentAlert = false;
                $scope.ready = true;

                $scope.submit = function () {
                    $scope.showMessageSentAlert = false;
                    $scope.ready = false;
                    //ModalMessage.show('<i class="fa fa-spinner fa-pulse"></i>');
                    Email.send($scope.first, $scope.last, $scope.email, $scope.message)
                    .then(function (response) {
                        $scope.ready = true;
                        //alert(response);
                        ModalMessage.hide();
                        $scope.showMessageSentAlert = true;
                        $scope.first = '';
                        $scope.last = '';
                        $scope.email = '';
                        $scope.message = '';
                    });
                };


            }]);


