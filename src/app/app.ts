/// <reference path="_all.ts" />

module LimeTreeApp {

    angular.module('app')
        .component("limeTreeApp", {
            templateUrl: "app/layout/shell.html",
            $routeConfig: [
                { path: "/home", component: "home", name: "Home" },
                { path: "/meeting", component: "meeting", name: "Meeting" },
                { path: "/history", component: "history", name: "History" },
                { path: "/questionnaire", component: "questionnaire", name: "Questionnaire" },
                { path: "/**", redirectTo: ["Home", ""] }
            ]
        });
}