(function () {
    "use strict";

    angular
        .module('app.actionableItems')
        .factory('ItemsList', ItemsList);

    /**
     * @ngInject
     */
    function ItemsList(fbutil, $firebaseArray) {
        return function (tenant:string) {
            console.log(tenant);
            var ref = fbutil.ref(tenant + '/items');
            return $firebaseArray(ref);            
        }
    }
})();
