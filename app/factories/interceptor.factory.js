app.factory('interceptorFactory', function ($q, $state, $location, CONST, ROUTE, securityService) {

  return {
    request: function (req) {
      if (req.url.startsWith(CONST.BASE_API_URL)) {
        req.headers['Content-Type'] = 'application/json';
      }

      return req;
    },

  }
});