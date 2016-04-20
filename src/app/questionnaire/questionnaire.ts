(function() {
    "use strict";

    angular
        .module('app.questionnaire')
        .controller('Questionnaire', Questionnaire);

    /**
     * @ngInject
     */
    function Questionnaire(fbutil, user, logger) {
        var vm = this;
        vm.newQuestion = null;
        vm.items = [
            { label: 'Question One?', answer: null },
            { label: 'Question Two?', answer: null },
            { label: 'Very important question?', answer: null },
            { label: 'Do you have employees?', answer: null }
        ];

        vm.AddNew = AddNew;

        function AddNew() {
            vm.items.push({ label: vm.newQuestion });
            vm.newQuestion = null;
        }
    }
})();
