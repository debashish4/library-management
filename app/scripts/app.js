'use strict';


var app = angular.module('app', ['ui.router', 'ngCookies', 'ngMaterial', 'ngMessages', 'loginModule', 'adminModule', 'userModule', 'registerModule', 'successModule']);

app.run(function($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    	console.log(error.unAuthorized);
        if (error.unAuthorized) {
            $state.go("login");
        }
    });
})

