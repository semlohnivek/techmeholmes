angular.module('app.components.home.homeController', [])
        .controller('homeController', ['$rootScope', '$scope', '$location', '$timeout', '$http', function ($rootScope, $scope, $location, $timeout, $http) {

                $scope.hello = "Hello from the home controller";

                $scope.widgetInfoBlocks = [];

                $scope.box1 = {};
                $scope.box2 = {};
                $scope.box3 = {};

                $scope.box1.title = 'Green';
                $scope.box1.glyphicon = 'fa-tree';
                $scope.box1.content = 'Yes...I\'m a little different.  Unlike the "other" guys, my web development paradigm is built with electronic media in mind.  Our trees are a precious comodity, and by choosing to build sites for viewing on desktops, mobile phones, and tables I\'m not only staying on the cutting edge, but I\'m helping to preserve our natural resources as well.  And that\'s good for us all!';

                $scope.box2.title = 'Global';
                $scope.box2.glyphicon = 'fa-globe';
                $scope.box2.content = 'This is the content of box 2.  The quick brown fox jumped over the moon';

                $scope.box3.title = 'Liked By All';
                $scope.box3.glyphicon = 'fa-thumbs-o-up';
                $scope.box3.content = 'This is the content of box 3.  sdfk s sdj ls flsdfjsl lsj dflksj dflsjdf lkj sljflsjdljs lfjs ';


            }]);


