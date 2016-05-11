/// <reference path="../_all.ts" />

module LimeTreeApp {
    angular.module('app.meeting').component('meeting', new MeetingComponent());

    class MeetingController {
        constructor() { }
    }

    class MeetingComponent implements ng.IComponentOptions {
        public controller: any;
        public templateUrl: string;
        public controllerAs: string;
        
        constructor() {
            var self = this;
            self.controller = MeetingController;
            self.templateUrl = 'app/meeting/meeting.html';
            self.controllerAs = 'vm';
        }
        /*        
            var module = angular.module('app.meeting');
        
            var controller = function () {
                var vm = this;
            };
        
            module.component("meeting", {
                templateUrl: "app/meeting/meeting.html",
                controllerAs: "vm",
                controller: [controller]
            });
        */
    }
}
