angular.module('app').config(routes)

function routes($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            controller: 'loginController',
            controllerAs: 'login',
            templateUrl: 'modules/login/views/login.html'
        })
        .state('admin', {
            url: '/admin',
            controller: 'adminController',
            templateUrl: 'modules/admin/views/admin.html'
        })

        $urlRouterProvider.otherwise('/login');

}
