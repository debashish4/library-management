	var successModuleController = angular.module('successModule');

	successModuleController.controller('successController', function($scope, authService) {
	    var vm = this;
	    vm.successPrivileges = ['admin', 'user'];
	    vm.loginAs = "";
	    vm.password = null;
	})
