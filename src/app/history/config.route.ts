(function() {
    'use strict';
    
    angular
        .module('app.history')
        .config(History);

    /* @ngInject */
    function History($routeProvider) {
         $routeProvider.whenAuthenticated('/history', {
             templateUrl: 'app/history/history.html',
             controller: 'History',
             controllerAs: 'vm',
             resolve: {
                 user: ['Auth', function(Auth) {
                     return Auth.$waitForAuth();
                 }]
             }
         });
    }
})();
