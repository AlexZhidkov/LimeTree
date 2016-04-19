(function() {
    'use strict';
    
    angular
        .module('app.questions')
        .config(questionsRoute);

    /* @ngInject */
    function questionsRoute($routeProvider) {
         $routeProvider.whenAuthenticated('/questions', {
             templateUrl: 'app/questions/questions.html',
             controller: 'Questions',
             controllerAs: 'vm',
             resolve: {
                 user: ['Auth', function(Auth) {
                     return Auth.$waitForAuth();
                 }]
             }
         });
    }
})();
