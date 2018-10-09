app.service('securityService', function (CONST, $cookies, $state) {

    var cookiesName = {
        token: 'token',
        loggedUser: 'loggedUser'
    }

    var model = {};

    model.start = function (user) {
        model.setToken(user.Token);
        model.setUserData(user);

        return $cookies.get(cookiesName.token);
    }

    model.setToken = function (token) {
        $cookies.remove(cookiesName.token);
        $cookies.put(cookiesName.token, token);
    }

    model.getToken = function () {
        return $cookies.get(cookiesName.token);
    }

    model.removeToken = function () {
        $cookies.remove(cookiesName.token);
    }

    model.setUserData = function (userData) {
        $cookies.remove(cookiesName.loggedUser);
        $cookies.putObject(cookiesName.loggedUser, userData);
    }

    model.getUserData = function () {
        var userData = $cookies.getObject(cookiesName.loggedUser);

        if(userData == undefined) {
            notyf.alert('Sua sessão expirou, por gentileza acesse novamente.')
            return $state.go(CONST.STATE.MAP.NAME);
        }

        return $cookies.getObject(cookiesName.loggedUser);
    }

    model.removeUserData = function () {
        $cookies.remove(cookiesName.loggedUser);
    }

    return model;
});
