/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
techMeHolmes.factory('Email', ['$rootScope', '$http', 'ModalMessage', function ($rootScope, $http, ModalMessage) {
        return {
            send: function (first, last, email, message) {
                return $http.post('sendmail.php', {first: first, last: last, email: email, message: message});
                //return $http.post('http://webhost/sendmail.php', {first: first, last: last, email: email, message: message});
            }
        };
    }]).factory('ModalMessage', ['$rootScope', function ($rootScope) {
        return {
            show: function (message) {
               $("#myModalBody").html('<p>' + message + '</p>');
               $("#myModal").modal('show');
            },
            hide: function() {
               $("#myModal").modal('hide');
            }
        };
    }]);




