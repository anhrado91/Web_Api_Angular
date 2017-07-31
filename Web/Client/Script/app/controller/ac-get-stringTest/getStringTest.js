(function () {
    'use strict';

    //Handel get dùng để sử lý trường hợp mình .
    angular.module('Web', ['TestServices']).controller('GetString',
        function (
            $scope,
            TestServices
        ) {

            //Handle get services
            function getString() {
                TestServices.getStr();
            }

        });
})();

