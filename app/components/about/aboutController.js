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
           caption: 'This isn\'t meant to be a shameless plug for CrossFit.  Just a nice picture of the better half and myself. We weren\'t competing btw...just watching.'
       },
       {
           url: imageRoot + 'bolivia_family.JPG',
           caption: 'On top of a small local dam in Tarija, Bolivia with my "adopted" Bolivian family.'
       },       
       {
           url: imageRoot + 'juggling.jpg',
           caption: 'Nothing relieves stress like a nice relaxing ax juggling session.'
       },
       {
           url: imageRoot + 'lake.JPG',
           caption: 'In Torres del Paine National Park, Patagonia, Chile.  Moments after snapping this pic, a naked Chinese man (barely visible in the background) ran naked into this glacier fed lake.'
       },
       {
           url: imageRoot + 'ohsquat.jpg',
           caption: 'I just like this pic because it makes me look like more of a bad ass than I really am.  Plus the American flag in the background is a nice touch.'
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


