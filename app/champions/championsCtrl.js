(function () {
    "use strict";
    angular
        .module("championsManagement")
        .controller("ChampionsCtrl",
        ["championsResource",ChampionsListCtrl]);

    function ChampionsListCtrl(championsResource) {
        var vm = this;
        vm.searchChampion = '';
        vm.masterdata;
       
        championsResource.query({
            //$filter: "substringof(Name,'Jax')"
            //$filter: "substringof(Name, '" + vm.searchChampion + "')"
        }, function (data) {
            vm.champions = data;
            
        });

        
    }
}());