angular.module('app.shared.widgets.widgetDirectives', [])
.directive('tmhWidgetInfoBlock', function () {
    return {
        restrict: 'E',
        scope: {
           content: '='  
        },
        controller: function($scope) {
            $scope.hello = "This is the widget info block directive saying hi";
        },
        templateUrl: 'app/shared/widgets/widgetInfoBlock.html',
        replace: true,
        link: function(scope, element, attributes) {
            //console.log(arguments);
        }
    };
}).directive('tmhWidgetTopImage', function () {
    return {
        restrict: 'E',
        scope: {
           image: '=' ,
           overlayText: '=',
           overlayStyle: '='
        },
        controller: function($rootScope, $scope) {
            $scope.root = $rootScope.imageRoot;
        },
        templateUrl: 'app/shared/widgets/widgetTopImage.html',
        replace: true,
        link: function(scope, element, attributes) {
            //console.log(arguments);
            scope.overlayStyle = {'color':'white'};
        }
    };
}).directive('tmhWidgetImageBlock', function ($rootScope, $document) {
    return {
        restrict: 'E',
        scope: {
           info: '='
        },
        controller: function($rootScope, $scope) {
          $scope.$apply();
        },        
        templateUrl: 'app/shared/widgets/widgetImageBlock.html',
        replace: true,
        link: function(scope, element, attributes) {
         
            // element.find('.photo').hover(function() {
            //     element.find('.caption').show('slide', {direction: "down"}, 100);
            // },function() {
            //     element.find('.caption').hide('slide', {direction: "down"}, 100);
            // });
            
            // element.find('.photo').click(function() {
            //     element.find('.caption').toggle('slide', {direction: "down"}, 100);
            // });            
        }
    };
}).directive('tmhWidgetSiteFeatures', function () {
    return {
        restrict: 'E',
        scope: {
           //image: '=' 
        },
        controller: function($scope) {
                $scope.showExpand = true;

                $scope.siteFeatures = [
                    {
                        icons: ['angular'],
                        title: 'Singe Page Application',
                        content: 'This entire site is built around the Angular.js SPA (Single Page Application) framework.'
                    },
                    {
                        icons: ['bootstrap', 'css'],
                        title: 'Responsive Behavior',
                        content: 'Why re-invent the wheel?  The Bootstrap grid system is used heavily to dictate responsive '
                    },
                    {
                        icons: ['angular', 'bootstrap'],
                        title: 'Header and Navigation',
                        content: 'Built as its own Angular directive, the header and navigation are largely built on the Bootstrap default navigation with a little bit of custome CSS tossed in to change its responsive behavior.'
                    },
                    {
                        icons: ['bootsrap'],
                        title: 'Carousel',
                        content: '100% Bootstrap'
                    },
                    {
                        icons: ['angular'],
                        title: 'Information Blocks',
                        content: 'These are the little blocks you see in the space above.  The bloc'
                    },
                    {
                        icons: ['angular', 'php'],
                        title: 'Contact Form',
                        content: 'A custom PHP page is called using the Angular $http object (which is essentially an AJAX wrapper).'
                    }
                ];

                $scope.showCollapse = {};

                $scope.setCollapseValue = function (value, index) {
                    $scope.showCollapse[index] = value;
                };

                $scope.toggleCollapseValue = function (index) {
                    //I know the use of jQuery is frowned upon in Angular, but in some cases it makes things
                    //way easier.  
                    $('li:nth-child(' + (index + 1) + ') .expand-collapse').toggle(200);
                    $('li:nth-child(' + (index + 1) + ') i')
                            .toggleClass('fa-plus-square')
                            .toggleClass('fa-minus-square')
                            .toggleClass('red')
                            .toggleClass('green');
                };
        },
        templateUrl: 'app/shared/widgets/widgetSiteFeatures.html',
        replace: true,
        link: function(scope, element, attributes) {
            //console.log(arguments);
        }
    };
}).directive('tmhWidgetSiteFeature', function () {
    return {
        restrict: 'E',
        scope: {
            title: '=',
            content: '='
        },
        //controller: function($scope) {},
        templateUrl: 'app/shared/widgets/widgetSiteFeature.html',
        replace: true,
        transclude: true
        //link: function(scope, element, attributes) {}
    };
});

