angular.module('app').service('candidateDataService', candidateData);

function candidateData($rootScope, $state, $http, $q, authService) {

    this.fetchData = function(loginInfo) {
    	var deferred = $q.defer();
    	var userdata = null;
    	var loggedinUserId = loginInfo[0].id;
    	console.log(loginInfo[0].id);
        $http.get("http://localhost:3000/userdata/" + loggedinUserId)
        .then(function(response) {
        	if(response){
        	   $rootScope.loggedinUserData= response.data;
               var res = response;
               deferred.resolve();
        		
        	} else{
        		console.log("else");
        	}
                
            }, function() {
                console.log("no response");
                return false;
            });

    return deferred.promise;
    }
}
