	var registerModuleController = angular.module('registerModule');

	registerModuleController.controller('registerController', function($scope, authService) {
	    var vm = this;
	    vm.loginPrivileges = ['admin', 'user'];
	    vm.loginAs = "";
	    vm.password = null;


	    vm.registerDetails = function(username, type, password) {
	        var result = authService.createUser(username, type, password).then(function(){
	        	vm.showErrMsg = true;
	        }, function(){
	        	console.log("SDf2");	
	        });

	    }


	    vm.resetDetails = function() {
	        vm.username = null;
	        vm.loginAs = null;
	        vm.password = null;
	    }
	})
