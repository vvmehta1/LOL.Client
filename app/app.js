(function () {
    "use strict";

    var app = angular.module("championsManagement",
        ["common.services","ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "index.html",
                controller: "mainCtrl"
            })
            .when("/champions", {
                templateUrl: "app/champions/championsView.html"
            })
            .when("/livegame", {
                templateUrl: "app/summoner/summonerView.html"
            })
            
    });

}());