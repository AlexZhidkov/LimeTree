(function() {
    "use strict";
    
    var module = angular.module('app');
    
    module.component("limeTreeApp", {
        templateUrl: "app/layout/shell.html",
        $routeConfig: [
            { path: "/home", component:"home", name: "Home" },
            { path: "/about", component: "about", name: "About" },
            { path: "/**", redirectTo: ["Home", ""] }
        ]                   
    });
    
    module.component("about", {
       template: "About us ..." 
    });
     
}());