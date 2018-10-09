//initialize the app

var app = angular.module('FleuryApp', [
    'ui.router',
    'ngCookies',
    'ngMap',
    'ui.bootstrap',


    ])

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);


//set html5 mode on, so now we can forget about the /#/ on url
app.config(['$sceProvider', '$locationProvider', '$httpProvider', function ($sceProvider, $locationProvider, $httpProvider) {
    $sceProvider.enabled(false);
    $httpProvider.interceptors.push('interceptorFactory');
    $locationProvider.html5Mode(true).hashPrefix('!');
}]);

app.config(function ($sceProvider) {
    $sceProvider.enabled(false);
});


app.run(['$rootScope', '$state', '$stateParams', '$transitions', '$location',
    function ($rootScope, $state, $stateParams, $transitions, $location) {

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;


        $transitions.onStart({to: '**'}, function (transtion) {
            this.locationSearch = $location.search();
        });

        $transitions.onSuccess({to: '**'}, function (transtion) {
            $location.search(this.locationSearch);
        });
    }
    ]);

moment.tz.add([
    "America/Sao_Paulo|LMT BRT BRST|36.s 30 20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwR.w HdKR.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 pTd0 PX0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0"
    ]);

var notyf = new Notyf({
    delay: 6000
});

app.directive('format', ['$filter', function ($filter) {
    return {
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;


            ctrl.$formatters.unshift(function (a) {
                return $filter(attrs.format)(ctrl.$modelValue)
            });

            ctrl.$parsers.unshift(function (viewValue) {

                elem.priceFormat({
                    prefix: '',
                    centsSeparator: ',',
                    thousandsSeparator: '.'
                });

                return elem[0].value;
            });
        }
    };
}]);
