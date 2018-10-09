app.config(function ($stateProvider, $urlRouterProvider, ROUTE) {

    $stateProvider

    //*********************** MAIN
        .state(ROUTE.MAIN.NAME, {
            url: ROUTE.MAIN.URL,
            templateUrl: 'app/views/main/main-page.view.html',
            controller: 'mainPageController',
            reloadOnSearch: false,
            abstract: true,
            data: {
                title: ROUTE.MAIN.PAGE_TITLE,
                description: null
            }
        })

        //*********************** MAIN PAGE
        .state(ROUTE.INITIAL_PAGE.NAME, {
            url: ROUTE.INITIAL_PAGE.URL,
            reloadOnSearch: false,
            views: {
                'view-content': {
                    templateUrl: ROUTE.INITIAL_PAGE.VIEW,
                    controller: ROUTE.INITIAL_PAGE.CONTROLLER,
                }
            },
            data: {
                title: ROUTE.INITIAL_PAGE.PAGE_TITLE,
                description: null
            }
        })



    $urlRouterProvider.otherwise('');
});
