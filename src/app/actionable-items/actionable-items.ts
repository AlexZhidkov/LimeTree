(function () {
    "use strict";

    angular
        .module('app.actionableItems')
        .controller('ActionableItems', ActionableItems);

    /**
     * @ngInject
     */
    function ActionableItems(ItemsList) {
        var vm = this;
        vm.items = ItemsList;
        vm.newItem = null;
        vm.AddNew = AddNew;

        function AddNew() {
            vm.items.$add({ label: vm.newItem });
            vm.newItem = null;
        }

    }
})();
