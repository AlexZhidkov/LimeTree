(function () {
    'use strict';

    angular
        .module('app.actionableItems')
        .config(actionableItems);

    /* @ngInject */
    function actionableItems($routeProvider) {
        $routeProvider.whenAuthenticated('/:tenant/actionableItems', {
            templateUrl: 'app/actionable-items/actionable-items.html',
            controller: 'ActionableItems',
            controllerAs: 'vm',
            resolve: {
                tenant: function ($route) {return $route.current.params.tenant; },
                user: ['Auth', function (Auth) {
                    return Auth.$waitForAuth();
                }]
            }
        });
    }
})();
