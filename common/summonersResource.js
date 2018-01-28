(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("summonersResource",
        ["$resource",
         "appSettings",
            summonersResource])

    function summonersResource($resource, appSettings)
    {
        return $resource(appSettings.serverPath + "/api/champions/:summoner");
    }
    
}());