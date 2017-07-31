(function () {
    "user strict"

    //constant là nới chứa chuổi string chung để easy quản lý.

    //Auth chứa string event.
    angular.module("web").constant("AUTH_EVENTS", {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    });

    angular.module("web").constant("", {
        all: '*',
        admin: 'admin',
        editor: 'editor',
        guest: 'guest'
    })

    angular.module("web").constant("servicesConstants", {
        'AUTHORIZATION_STORE': 'authorizationData'
        , 'RESOURCE_STORE': '$ResourceStore'
        , 'AUTHORIZATION_RETURN_URL': '#/welcome'
        , 'BROADCAST_LOGOUT': 'logout'
    });
});