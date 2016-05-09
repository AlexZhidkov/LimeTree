(function() {
    'use strict';
    
    angular
        .module('app.profile')
        .config(Profile);

    /* @ngInject */
    function Profile($routeProvider) {
         $routeProvider.whenAuthenticated('/profile', {
             templateUrl: 'app/profile/profile.html',
             controller: 'Profile',
             controllerAs: 'vm',
             resolve: {
                 user: ['Auth', function(Auth) {
                     return Auth.$waitForAuth();
                 }]
             }
         });
    }
})();
