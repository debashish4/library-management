	var loginModuleController = angular.module('loginModule');

	loginModuleController.controller('loginController', function($scope) {
		var vm = this;
	    vm.loginPrivileges = ['Admin', 'Student'];
	    vm.loginAs = "";
	    vm.password = null;


	    vm.authenticateDetails = function(){
	    	console.log( vm.password);
	    	console.log( vm.loginAs);
	    }


	    vm.resetDetails = function() {
	    	vm.name = null;
	    	vm.loginAs = null;
	    	vm.password = null;
	    }
	})
