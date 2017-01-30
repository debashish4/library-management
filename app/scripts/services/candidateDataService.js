angular.module('app').service('candidateDataService', candidateData);

function candidateData($rootScope, $state, $http, $q, authService) {

    this.fetchData = function(loginInfo) {
        var deferred = $q.defer();
        var userdata = null;

        if (loginInfo) {
            var loggedinUserId = loginInfo[0].id;
        }else{
        	$state.go('login');
        	return;
        }
        $http.get("http://localhost:3000/userdata/" + loggedinUserId)
            .then(function(response) {
                if (response) {
                    $rootScope.loggedinUserData = response.data;
                    var res = response;
                    deferred.resolve();

                } else {
                    deferred.reject();
                }

            })
            .catch(function() {
                console.log("error sd");
            });

        return deferred.promise;
    }
}
