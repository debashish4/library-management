angular.module('app').config(routes)

function routes($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            controller: 'loginController',
            controllerAs: 'login',
            templateUrl: 'modules/login/views/login.html'
        })
        .state('register', {
            url: '/register',
            controller: 'registerController',
            controllerAs: 'register',
            templateUrl: 'modules/register/views/register.html'
        })
        .state('admin', {
            url: '/admin',
            controller: 'adminController',
            controllerAs: 'admin',
            templateUrl: 'modules/admin/views/admin.html'
        })
        .state('user', {
            url: '/user',
            controller: 'userController',
            controllerAs: 'user',
            templateUrl: 'modules/user/views/user.html'
        })
        .state('success', {
            url: '/success',
            controller: 'successController',
            controllerAs: 'success',
            templateUrl: 'modules/success/views/success.html'
        })

    $urlRouterProvider.otherwise('/login');

}
