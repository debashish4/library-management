// USE IF U DECIDE NOT TO USE COOKIES

angular.module('app').service('setterGetter', setterGetter);

function setterGetter($rootScope, $state, $http, $q){
	vm = this;
	vm.loggedInAdmin = function(data){
		vm.loggedInAdminInfo = data;
		console.log("setter getter ",vm.loggedInAdminInfo);
		return vm.loggedInAdminInfo;
	}
}