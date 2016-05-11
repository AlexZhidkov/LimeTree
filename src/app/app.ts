(function() {
    "use strict";
    
    var module = angular.module('app');
    
    module.component("limeTreeApp", {
        templateUrl: "app/layout/shell.html",
        $routeConfig: [
            { path: "/home", component:"home", name: "Home" },
            { path: "/meeting", component:"meeting", name: "Meeting" },
            { path: "/history", component:"history", name: "History" },
            { path: "/questionnaire", component: "questionnaire", name: "Questionnaire" },
            { path: "/**", redirectTo: ["Home", ""] }
        ]                   
    });
    
    module.component("about", {
       template: "About us ..." 
    });
     
}());