	var loginModuleController = angular.module('loginModule');

	loginModuleController.controller('loginController', function($scope, authService) {
	    var vm = this;
	    vm.loginPrivileges = ['Admin', 'Student'];
	    vm.loginAs = "";
	    vm.password = null;


	    vm.authenticateDetails = function(username, password) {
	        authService.authenticateLogin(username, password);
	    }


	    vm.resetDetails = function() {
	        vm.username = null;
	        vm.loginAs = null;
	        vm.password = null;
	    }
	})
