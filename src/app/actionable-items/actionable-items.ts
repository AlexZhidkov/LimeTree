(function () {
    "use strict";

    angular
        .module('app.actionableItems')
        .controller('ActionableItems', ActionableItems);

    /**
     * @ngInject
     */
    function ActionableItems(ItemsList, tenant) {
        var vm = this;
        vm.items = ItemsList(tenant);
        vm.newItem = null;
        vm.AddNew = AddNew;
        vm.tenant = tenant;

        function AddNew() {
            vm.items.$add({ label: vm.newItem });
            vm.newItem = null;
        }

    }
})();
