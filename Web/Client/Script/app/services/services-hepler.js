(function () {
    "use strict"

    //setting services common "get" and "Post" throunght method services.
    angular.module("Web").service("serviceHelper", service);

    //$inject appear when add services for module.
    //$rootScope :$rootScope là một thành phần $scope cha, nó có lợi thế là ở controller A bạn có thể sử dụng data ở controlller B một cách đơn giản thông qua biến $rootScope toàn cục.
    //$http: thông qua phương thức này mà ta có thể gọi tới url.
    //$q: https://viblo.asia/p/tim-hieu-ve-q-va-promise-trong-angular-mDYGDPNlGpx
    //$window:
    //$location,
    //$timeout
    //$services-constants
    //

    service.$inject = [
        '$rootScope',
        '$http',
        '$q',
        '$window',
        '$location',
        '$timeout',
        '$servicesConstants',
        '$storageService',
        '$modalService'
    ];

    // cung cấp thông tin về yêu cầu hiện tại
    function service($rootScope, $http, $q, $window, $location, $timeout, servicesConstants, storageService, modalService) {

        //isDebug kiểm tra ???
        var isDebug = false;

        //method of get select data................
        function get(getUrl) {
            //$q.defer: ?
            var defer = $q.defer;
            $http.get(getUrl).success(function (data) {
                defer.resolve(data);
            }).error(function (data, status) {

                //defer.reject : ???
                defer.reject();

                //check status còn hoạt động không.
                checkStatusCode(status);

                //check return data.
                console.log(data);
            });
        };

        //method of post thực thi sư kiện đồng thời truyền tham số qua  APi.
        function post(postUrl, param, opts) {
            var defer = $q.defer();
            $http.post(
                postUrl,
                JSON.stringify(param),
                opts
            ).success(function (data) {
                defer.resolve(data);
            }).error(function (data, status) {
                defer.reject();
                checkStatusCode(status);
                console.log(data);
            });
        }

        //function CheckStaus còn hoạt động ko hay trả error về hàm này
        //kiểm tra checkStatus của nó vô lỗi nào tình trạng status đá về những lổi nào.
        var checkStatusCode = function (status) {
            var defer = $q.defer();

            if (status == 401) {
                storageService.removeItem(servicesConstants.AUTHORIZATION_STORE);
                $rootScope.$broadcast(servicesConstants.BROADCAST_LOGOUT);
                $timeout($location.path(servicesConstants.AUTHORIZATION_RETURN_URL), 150);
            }
            else if (status == 404) {
                $location.path("/404");
            }
            else if (status == 500) {
                if (!isDebug)
                    $location.path("/error");
                else
                    modalService.alertModal('Error occurred !');
            }
        };

        return {
            get: get,
            post: post,
            checkStatusCode: checkStatusCode
        };
    };
});