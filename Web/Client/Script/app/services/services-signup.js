(function () {
    angular.module("web").service("signupServices", signupSer)
    signSer.$inject = [
        "$http",
        "$q",
        "$timeout",
        "$location",
        "appConstants",
        "serviceHelper",
        "messageService",
        "storageService",
        "commonService",
        "$modal"
    ]

    function signup(
        $http,
        $q,
        timeout,
        $location,
        appConstants,
        serviceHelper,
        messageService,
        storageService,
        commonService,
        $modal
    ) {
        var url = "http://localhost:7375/api/authentication/Signup";

        //save user 
        var saveUser = function (user) {
            return serviceHelper.post(url, "Save", user);
        };

        return {
            saveUser: saveUser
        }
    };
});