angular.module('app.shared.footer.footerDirective', [])
.directive('tmhFooter', function () {
    return {
        restrict: 'E',
        controller: function($scope, $location, $route) {

            
        },
        templateUrl: 'app/shared/footer/footerView.html',
        replace: true,
        link: function(scope, element, attributes) {
            //console.log(arguments);
        }
    };
});
