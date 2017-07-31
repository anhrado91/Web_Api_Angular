(function () {
    angular.module("web").service("commonService", commonSer)

    commonSer.$inject = [
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
    function commonSer(
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
        //handelResult return string 
        var handelResult = function (resp, callback, errCallback) {
            // handel languages
            if (resp.ReturnCode == 200) {
                if (callback) {
                    callback(resp.Result);
                }
            }
            else {
                var message = this.handleMessages(resp.Result);

                $timeout(function () {
                    alert('time-out')
                });

                //cacth error
                if (errCallback) {
                    errCallback(resp.Result);
                }
            }
        }

        //handleMessages return string
        var handleMessages = function (messageArray) {
            messageArray = messageArray || [];
            var messages = '';
            for (var i = 0; i < messageArray.length; i++) {
                messages += messageArray[i] + '\n';
            }
            return messages;
        };
    };
});