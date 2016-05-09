(function() {
    'use strict';
    
    angular
        .module('app.meeting')
        .config(Meeting);

    /* @ngInject */
    function Meeting($routeProvider) {
         $routeProvider.whenAuthenticated('/meeting', {
             templateUrl: 'app/meeting/meeting.html',
             controller: 'Meeting',
             controllerAs: 'vm',
             resolve: {
                 user: ['Auth', function(Auth) {
                     return Auth.$waitForAuth();
                 }]
             }
         });
    }
})();
