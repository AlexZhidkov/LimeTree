(function() {
    "use strict";

    angular
        .module('app.actionableItems')
        .controller('ActionableItems', ActionableItems);

    /**
     * @ngInject
     */
    function ActionableItems($rootScope, Auth, fbutil, user, logger) {
        var vm = this;
        vm.newItem = null;
        vm.items = [
            { label: 'Item One' },
            { label: 'Item Two' },
            { label: 'Very important item' },
            { label: 'Item Related to employees' }
        ];
        vm.AddNew = AddNew;

        function AddNew() {
            vm.items.push({ label: vm.newItem });
            vm.newItem = null;
        }

    }
})();
