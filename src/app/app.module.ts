(function() {
    'use strict';

    angular.module('app', [
        /*
         * Order is not important. Angular makes a
         * pass to register all of the modules listed
         * and then when app.dashboard tries to use app.data,
         * its components are available.
         */

        /*
         * Everybody has access to these.
         * We could place these under every feature area,
         * but this is easier to maintain.
         */
        'ngMaterial',
        'app.core',

        /*
         * Feature areas
         */
        'app.config',
        'app.security',
        'app.home',
        'app.account',
        'app.chat',
        'app.layout',
        'app.login',
        'app.orders',
        'app.orderItem',
        'app.questionnaire',
        'app.actionableItems',
        'app.questions'
    ])

        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.otherwise({
                redirectTo: '/dashboard'
            });
        }])

        .run(['$rootScope', '$location', 'Auth', 'loginRedirectPath', 'homeRedirectPath', 'fbutil', '$firebaseObject',
            function($rootScope, $location, Auth, loginRedirectPath, homeRedirectPath, fbutil, $firebaseObject) {
                // track status of authentication
                Auth.$onAuth(function(user) {
                    $rootScope.loggedIn = !!user;
                    if ($rootScope.loggedIn) {
                       $rootScope.profile = $firebaseObject(fbutil.ref('users', user.uid));
                       $location.path(homeRedirectPath);
                    }
                    else {
                        $location.path(loginRedirectPath);
                    }
                });
            }]);

})();
