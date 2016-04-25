(function () {
    "use strict";

    angular
        .module('app.questions')
        .controller('Questions', Questions);

    /**
     * @ngInject
     */
    function Questions($rootScope, QuestionList, user, logger) {
        var vm = this;
        vm.newQuestion = null;
        vm.questions = QuestionList;
        vm.AddNew = AddNew;
        vm.dragControlListeners = {
            orderChanged: function (event) {
                vm.questions.forEach(reindex);
            }
        };

        function reindex(item, index) {
            item.index = index;
        }

        function AddNew() {
            if (vm.newQuestion) {
                vm.questions.$add({ label: vm.newQuestion, index: vm.questions.length });
            }
            vm.newQuestion = null;
        };
    }
})();
