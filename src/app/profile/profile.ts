(function () {
    "use strict";

    angular
        .module('app.profile')
        .controller('Profile', Profile);

    /**
     * @ngInject
     */
    function Profile() {
        var vm = this;
        vm.structures = loadAll();
        vm.selectedItem = null;
        vm.searchText = null;
        vm.querySearch = querySearch;

        function querySearch(query) {
            var results = query ? vm.structures.filter(createFilterFor(query)) : [];
            return results;
        }
        /**
         * Build `states` list of key/value pairs
         */
        function loadAll() {
            var allStructures = 'Company, Trust, Partnership, Joint Venture, Sole Trader';
            return allStructures.split(/, +/g).map(function (structure: string) {
                return {
                    value: structure.toLowerCase(),
                    display: structure
                };
            });
        }
        
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(structure) {
                return (structure.value.indexOf(lowercaseQuery) === 0);
            };
        }
    }

})();
