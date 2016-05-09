(function() {
    "use strict";

    angular
        .module('app.meeting')
        .controller('Meeting', Meeting);

    /**
     * @ngInject
     */
    function Meeting(fbutil, QuestionList) {
        var vm = this;
        vm.questions = QuestionList;
    }
    
})();
