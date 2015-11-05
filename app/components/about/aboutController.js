angular.module('app.components.examples.aboutController', [])
        .controller('aboutController', ['$rootScope', '$scope', '$location', '$timeout', '$http', function ($rootScope, $scope, $location, $timeout, $http) { 
        
   $scope.hello = "Hello from the about controller";
   
   var imageRoot = $rootScope.imageRoot + '/about/';
   
   $scope.blockInfos = [
       {
           url: imageRoot + 'backpacking.JPG',
           caption: 'Backpacking in the Rocky Mountains of Colorado.'
       },
       {
           url: imageRoot + 'el_xfit.jpg',
           caption: 'The better half and I at a CrossFit competition in Utah.'
       },
       {
           url: imageRoot + 'bolivia_family.JPG',
           caption: 'My adopted Bolivian family.'
       },       
       {
           url: imageRoot + 'juggling.jpg',
           caption: 'Nothing relieves stress like a good ax juggling session.'
       },
       {
           url: imageRoot + 'lake.JPG',
           caption: 'This shot was taken literally seconds before a Chinese guy (that you can barely see on the shore in the background) took off all his clothes and jumped naked into this glacier fed lake.'
       },
       {
           url: imageRoot + 'ohsquat.jpg',
           caption: 'Desperately trying to hang on for one more rep at this team comp.'
       },
       {
           url: imageRoot + 'race_stands.JPG',
           caption: 'Taking in the sun in Daytona Beach, FL at our annual trip to the Rolex 24 hour race.'
       },
       {
           url: imageRoot + 'rball.jpg',
           caption: 'Slaying some ball.'
       }     
   ];
}]);


