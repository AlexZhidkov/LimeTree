(function() {
    'use strict';
    
    angular
        .module('app.home')
        .config(homeRoute);

    /* @ngInject */
    function homeRoute($routeProvider) {
         $routeProvider.when('/home', {
             templateUrl: 'app/home/home.html',
             controller: 'Home',
             controllerAs: 'vm'
         });
    }
})();
