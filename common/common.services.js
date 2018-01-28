(function () {
    "use strict";

    angular
        .module("common.services", ["ngResource"])
        .constant("appSettings",
        {
            //serverPath: "http://leaguelegendswebapi.azurewebsites.net/"
            serverPath: "http://localhost:50086/"
        });

}());
