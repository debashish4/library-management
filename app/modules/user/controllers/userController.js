	var userModuleController = angular.module('userModule');

	userModuleController.controller('userController', function($scope, $mdSidenav, $log) {
	    vm = this;
	    vm.close = function() {
	        // Component lookup should always be available since we are not using `ng-if`
	        $mdSidenav('left').close()
	            .then(function() {
	                $log.debug("close LEFT is done");
	            });
	    };


	    vm.toggleLeft = buildToggler('left');
	    vm.toggleRight = buildToggler('right');

	    function buildToggler(componentId) {
	        return function() {
	            $mdSidenav(componentId).toggle();
	        }
	    }



	})
