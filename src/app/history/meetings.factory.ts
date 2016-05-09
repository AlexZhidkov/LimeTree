(function () {
    "use strict";

    angular
        .module('app.history')
        .factory('MeetingList', MeetingList);

    /**
     * @ngInject
     */
    function MeetingList(fbutil, $firebaseArray) {
        var ref = fbutil.ref('meetings');
        return $firebaseArray(ref);
    }
})();
