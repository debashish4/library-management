	var adminModuleController = angular.module('adminModule');

	adminModuleController.controller('adminController', function($scope, $rootScope, $mdSidenav, $log, $cookieStore, $q, candidateDataService) {
	    vm = this;
	    vm.close = function() {
	        // Component lookup should always be available since we are not using `ng-if`
	        $mdSidenav('left').close()
	            .then(function() {
	                $log.debug("close LEFT is done");
	            });
	    };

	    $cookieStore.get('loggedInAdmin');
	    var loggedInAdmin = $cookieStore.get('loggedInAdmin');
	      vm.profileData = candidateDataService.fetchData(loggedInAdmin).then(function(){
	      		console.log("success", $rootScope.loggedinUserData);
	      }, 
	      function(){
	      		console.log("error");
	      });
	      console.log("vm.profileData", vm.profileData)


	    vm.toggleLeft = buildToggler('left');
	    vm.toggleRight = buildToggler('right');

	    function buildToggler(componentId) {
	        return function() {
	            $mdSidenav(componentId).toggle();
	        }
	    }



	})
