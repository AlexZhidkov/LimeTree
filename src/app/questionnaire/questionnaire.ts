(function() {
    "use strict";
    
    var module = angular.module('app.questionnaire');

    /**
     * @ngInject
     */
    var controller = function(QuestionList) {
        var vm = this;          
        vm.questions = QuestionList;
    };

    module.component("questionnaire", {
        templateUrl: "app/questionnaire/questionnaire.html",
        controllerAs: "vm",
        controller: [controller]
    });
    
})();
