	var loginModuleController = angular.module('loginModule');

	loginModuleController.controller('loginController', function($scope, authService) {
	    var vm = this;
	    // vm.loginPrivileges = [{ "id": 0, "type": "User" }, { "id": 1, "type": "Admin" }];
	    vm.loginPrivileges = ["user", "admin"];
	    vm.loginAs = "";
	    vm.password = null;


	    vm.authenticateDetails = function(username, type, password) {
	        var result = authService.authenticateLogin(username, type, password);
	    }
	    vm.resetDetails = function() {
	        vm.username = null;
	        vm.loginAs = null;
	        vm.password = null;
	    }
	})
