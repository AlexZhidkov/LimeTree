(function () {
    "use strict";

    var module = angular.module('app.home');

    var controller = function() {
        var vm = this;          
    };

    module.component("home", {
        templateUrl: "app/home/home.html",
        controllerAs: "vm",
        controller: [controller]
    });
    
})();
