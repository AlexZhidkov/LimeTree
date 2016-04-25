(function () {
    "use strict";

    angular
        .module('app.actionableItems')
        .factory('ItemsList', ItemsList);

    /**
     * @ngInject
     */
    function ItemsList(fbutil, $firebaseArray) {
        var ref = fbutil.ref('items');
        return $firebaseArray(ref);
    }
})();
