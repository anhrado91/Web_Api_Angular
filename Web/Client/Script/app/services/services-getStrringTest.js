(function () {
    angular.module('Web',
        [
            "$http",
            "$q",
            "$timeout",
            "$location",
            "serviceHelper"
        ]
    ).service("TestServices",
        function getStringSer(
            $rootScope,
            $scope,
            $http,
            $location,
            serviceHelper
        ) {
            console.log('ââ');

            //var url = "http://localhost:7375/";
            //function getStr() {
            //    return serviceHelper.get(url);
            //};
            //return {
            //    getString: getString
            //};

        });
})();
