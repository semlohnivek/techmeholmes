var techMeHolmes = angular.module('techMeHolmes', [
    'ngRoute',
    'ngAnimate',
    'ngSanitize',
    'ui.select',
    'ui.bootstrap',
    'ui.utils',
    //techMeHolmes directives
    'app.shared.header.headerDirective',
    'app.shared.footer.footerDirective',
    'app.shared.widgets.widgetDirectives',
    //techMeHolmes controllers
    'app.components.home.homeController',
    'app.components.examples.aboutController',
    'app.components.examples.examplesController',
    'app.components.examples.contactController'

]);

techMeHolmes.run(['$rootScope', function ($rootScope) {
//    $rootScope.urlBase = 'http://71.205.59.188:8099/WebServices.aspx'
//    $rootScope.chartData = {};
        $rootScope.imageRoot = 'assets/img/';
        //$rootScope.headerImage = 'torres_full2.jpg';

        //This is here since we have a static menu
        //Forces the scroll position back to the top of the page
        //as the route changes.
        $rootScope.$on('$locationChangeStart', function (event) {
            $('body').scrollTop(0);
        });




    }]);


