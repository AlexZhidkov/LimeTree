(function() {
    "use strict";

    angular
        .module('app.history')
        .controller('History', History);

    /**
     * @ngInject
     */
    function History(fbutil, MeetingList) {
        var vm = this;
        vm.meetings = MeetingList;
    }
    
})();
