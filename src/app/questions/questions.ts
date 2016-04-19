(function () {
    "use strict";

    angular
        .module('app.questions')
        .controller('Questions', Questions);

    /**
     * @ngInject
     */
    function Questions($rootScope, Auth, $location, fbutil, user, logger) {
        var vm = this;
        vm.newQuestion = null;
        vm.items = [{
            label: 'Question One?'
        }, {
                label: 'Question Two?'
            }, {
                label: 'Very important question?'
            }, {
                label: 'Do you have employees?'
            }];
        vm.AddNew = AddNew;
        vm.dragControlListeners = dragControlListeners;

        var dragControlListeners = {
            itemMoved: function (event) {
                console.log('itemMoved : ', event.source.index, 'to', event.dest.index);
            },
            orderChanged: function (event) {
                console.log('orderChanged : ', event.source.index, 'to', event.dest.index);
            }
        };

        function AddNew() {
            vm.items.push({ label: vm.newQuestion });
            vm.newQuestion = null;
        }
        /*
                       var dragControlListeners = {
                            accept: function (sourceItemHandleScope, destSortableScope) { return boolean }//override to determine drag is allowed or not. default is true.
                    itemMoved: function (event) {//Do what you want},
                                orderChanged: function(event) {//Do what you want},
                                    containment: '#board'//optional param.
                                    clone: true //optional param for clone feature.
                                    allowDuplicates: false //optional param allows duplicates to be dropped.
                                };
                
                 
                            }
                        }
               */
    }
})();
