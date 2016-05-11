(function() {
    "use strict";
    
    var module = angular.module('app.meeting');

    var controller = function() {
        var vm = this;          
    };

    module.component("meeting", {
        templateUrl: "app/meeting/meeting.html",
        controllerAs: "vm",
        controller: [controller]
    });
    
})();
