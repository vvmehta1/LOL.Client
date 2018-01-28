(function () {
    "use strict";
    angular
        .module("championsManagement")
        .controller("SummonerCtrl",
        ["summonersResource",PlayersListCtrl]);

    function PlayersListCtrl(summonersResource) {
        var vm = this;
        vm.searchSummoner = '';

        vm.search = function ()
        {
            summonersResource.query({
                summoner: vm.searchSummoner
            }, function (data) {
                vm.players = data;

            });
        }
    }
}());