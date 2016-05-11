(function() {
    "use strict";

    var module = angular.module('app.history');

    /**
     * @ngInject
     */
    var controller = function(MeetingList) {
        var vm = this;          
        vm.meetings = MeetingList;
    };

    module.component("history", {
        templateUrl: "app/history/history.html",
        controllerAs: "vm",
        controller: [controller]
    });
    
})();
