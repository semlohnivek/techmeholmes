angular.module('app.shared.header.headerDirective', [])
        .directive('tmhHeader', function ($document) {
            return {
                restrict: 'E',
                controller: function ($scope, $location, $route) {
                    $scope.hello = "This is the header directive saying hi";
                    $scope.activeTab = 'home';

                    $scope.setActiveTab = function (id) {
                        $scope.activeTab = id;
                    };

                    if ($location.url().length > 1) {
                        $scope.setActiveTab($location.url().substr(1, $location.url().length - 1));
                    }
                    ;

                },
                templateUrl: 'app/shared/header/headerView.html',
                replace: true,
                link: function (scope, element, attributes) {
                    $document.on('scroll', function(event) {
                        if ($document[0].scrollingElement.scrollTop > 400) {
                           $('#divTitle').removeClass('opacity-75');
                        }
                        else {
                           $('#divTitle').addClass('opacity-75');
                        }
                    });
                }
            };
        });
