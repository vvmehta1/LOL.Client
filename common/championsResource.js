(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("championsResource",
        ["$resource",
         "appSettings",
            championsResource])

    function championsResource($resource, appSettings)
    {
        return $resource(appSettings.serverPath + "/api/champions/:Name");
    }
    
}());