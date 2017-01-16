angular.module('loginModule').service('authService', authService)

function authService($http, $state) {
    this.authenticateLogin = function(username, password){
   	 $http.get("http://localhost:3000/user?name="+ username)
        .then(function(response) {
        	if (!response.data.length){
        		return "false";
        	}else if(response.data[0].password === password){
        		console.log("matched");
        		$state.go('admin');
        	} else{

        	}
        }, function(){
        	console.log("not matched");
        });
   }
}
