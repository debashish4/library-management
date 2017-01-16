	var loginModuleController = angular.module('loginModule');

	loginModuleController.controller('loginController', function($scope, authService) {
	    var vm = this;
	    vm.loginPrivileges = ['admin', 'student'];
	    vm.loginAs = "";
	    vm.password = null;


	    vm.authenticateDetails = function(username, type, password) {
	        // username = username.toLowerCase();
	        // type = type.toLowerCase();
	        var result = authService.authenticateLogin(username, type, password).then(function(){
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
