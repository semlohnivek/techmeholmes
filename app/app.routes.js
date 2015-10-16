techMeHolmes.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        var appRoot = 'app/components/';
        $routeProvider.
//            when('/', {
//                templateUrl: appRoot + 'home/homeView.html'
//            }).
            when('/', {
                templateUrl: appRoot + 'home/homeView.html',
                controller: 'homeController'
            }).
            when('/about', {
                templateUrl: appRoot + 'about/aboutView.html',
                controller: 'aboutController'
            }).                    
            when('/examples', {
                templateUrl: appRoot + 'examples/examplesView.html',
                controller: 'examplesController'
            }).
            when('/contact', {
                templateUrl: appRoot + 'contact/contactView.html',
                controller: 'contactController'
            }).                    
            otherwise({
                redirectTo: '/'
            });
    }]);