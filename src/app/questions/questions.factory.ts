(function () {
    "use strict";

    angular
        .module('app.questions')
        .factory('QuestionList', QuestionList);

    /**
     * @ngInject
     */
    function QuestionList(fbutil, $firebaseArray) {
        var ref = fbutil.ref('questions');
        return $firebaseArray(ref);
    }
})();
