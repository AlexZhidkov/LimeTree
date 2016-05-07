(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('Shell', Shell);

    /**
     * @ngInject
     */
    function Shell($rootScope, $scope, $timeout, $mdSidenav, Auth, config, logger, fbutil, $location, loginRedirectPath) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = config.appTitle;
        vm.signInWithProvider = signInWithProvider;
        vm.signOut = signOut;
        vm.toggleLeft = buildDelayedToggler('left');

        activate();

        function activate() {
        }

        function signInWithProvider(provider: string) {
            $scope.err = null;
            Auth.$authWithOAuthPopup(provider, function(error, authData) {
                if (error) {
                    $scope.err = errMessage(error);
                } else {
                    console.log(authData);
                    //$location.path('/dashboard');
                }
            });
        }

        function signOut() {
            buildDelayedToggler('left');
            $rootScope.profile = null;
            fbutil.ref().unauth();
            $location.path(loginRedirectPath);
        }
        
         function errMessage(err) {
            return angular.isObject(err) && err.code ? err.code : err + '';
        }

        /**
         * Supplies a function that will continue to operate until the
         * time is up.
         */
        function debounce(func, wait, context) {
            var timer;
            return function debounced() {
                var context = $scope,
                    args = Array.prototype.slice.call(arguments);
                $timeout.cancel(timer);
                timer = $timeout(function() {
                    timer = undefined;
                    func.apply(context, args);
                }, wait || 10);
            };
        }

        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildDelayedToggler(navID) {
            return debounce(function() {
                $mdSidenav(navID)
                    .toggle();
            }, 200);
        }
    }
})();
