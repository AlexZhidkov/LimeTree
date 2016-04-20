(function() {
    'use strict';
    
    angular
        .module('app.actionableItems')
        .config(actionableItems);

    /* @ngInject */
    function actionableItems($routeProvider) {
         $routeProvider.whenAuthenticated('/actionableItems', {
             templateUrl: 'app/actionable-items/actionable-items.html',
             controller: 'ActionableItems',
             controllerAs: 'vm',
             resolve: {
                 user: ['Auth', function(Auth) {
                     return Auth.$waitForAuth();
                 }]
             }
         });
    }
})();
