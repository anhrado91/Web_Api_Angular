(function (ng) {
    angular.module("web").controller("signupCtrl", singupCtrl);

    ctrl.$inject = [
        '$rootScope',
        '$scope',
        '$http',
        '$location',
        'appConstants',
        'userService',
        '$modal',
        '$log',
        'facebookService',
        'storageService',
        'commonService']
    ];

    function(
        $rootScope,
        $scope,
        $http,
        $location,
        appConstants,
        userService,
        $modal,
        $log,
        facebookService,
        storageService,
        commonService
    ) {
        //save on person.
        $scope.saveUser(){
            // var mess = $scope.validSaveUser();
            if (mess == '') {
                userService.saveUser($scope.user).then(function (data) {

                });
            }
        };

        //valition of username.
        $scope.validSaveUser = function () {

        }
    }

})(angular);