/// <reference path="_all.ts" />

module ContactManagerApp {

    angular.module('app', [
        /*
         * Everybody has access to these.
         * We could place these under every feature area,
         * but this is easier to maintain.
         */
        'ngMaterial',
        'ngComponentRouter',
        'app.core',

        /*
         * Feature areas
         */
        'app.config',
        'app.security',
        'app.home',
        'app.profile',
        'app.account',
        'app.layout',
        'app.meeting',
        'app.history',
        'app.questionnaire',
        'app.actionableItems',
        'app.questions'
    ])
        .value("$routerRootComponent", "limeTreeApp")
/*        
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.otherwise({
                redirectTo: '/home'
            });
        }])

        .run(['$rootScope', '$location', 'Auth', 'loginRedirectPath', 'homeRedirectPath', 'fbutil', '$firebaseObject',
            function ($rootScope, $location, Auth, loginRedirectPath, homeRedirectPath, fbutil, $firebaseObject) {
                // track status of authentication
                Auth.$onAuth(function (user) {
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
*/
}
