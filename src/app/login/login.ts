(function() {
    "use strict";

    angular
        .module('app.login')
        .controller('Login', Login);

    /**
     * @ngInject
     */
    function Login($scope, Auth) {
        var vm = this;
        $scope.email = null;
        $scope.pass = null;
        $scope.confirm = null;
        $scope.createMode = false;

        $scope.signInWithProvider = function(provider) {
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

        $scope.signInAsGuest = function() {
            $scope.err = null;
            Auth.$authAnonymously(function(error) {
                if (error) {
                    $scope.err = errMessage(error);
                } else {
                    //$location.path('/dashboard');
                }
            });
        }

         function errMessage(err) {
            return angular.isObject(err) && err.code ? err.code : err + '';
        }
    }

})();
