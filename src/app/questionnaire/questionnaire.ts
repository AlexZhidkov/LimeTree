(function() {
    "use strict";

    angular
        .module('app.questionnaire')
        .controller('Questionnaire', Questionnaire);

    /**
     * @ngInject
     */
    function Questionnaire(fbutil, QuestionList) {
        var vm = this;
        vm.questions = QuestionList;
    }
    
})();
