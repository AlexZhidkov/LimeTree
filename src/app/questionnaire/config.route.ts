(function() {
    'use strict';
    
    angular
        .module('app.questionnaire')
        .config(Questionnaire);

    /* @ngInject */
    function Questionnaire($routeProvider) {
         $routeProvider.whenAuthenticated('/questionnaire', {
             templateUrl: 'app/questionnaire/questionnaire.html',
             controller: 'Questionnaire',
             controllerAs: 'vm',
             resolve: {
                 user: ['Auth', function(Auth) {
                     return Auth.$waitForAuth();
                 }]
             }
         });
    }
})();
