angular.module('loginModule').service('authService', authService)

function authService($http, $state, $q, $rootScope, $cookieStore, setterGetter) {
    this.authenticateLogin = function(username, type, password) {
        var deferred = $q.defer();
        $http.get("http://localhost:3000/user?username=" + username)
            .then(function(response) {
                var data = response.data;
                if (!data.length) {
                    console.log(response);
                    console.log("not data in response");
                    deferred.reject();
                } else if (data[0].password === password && data[0].type === type) {
                    console.log("matched");
                    if (type === "user") {
                        var loggedInUser = data;
                        $state.go('user');
                        return;
                    } else {
                        var loggedInAdmin = data;
                        $cookieStore.put("loggedInAdmin",loggedInAdmin);
                        // setterGetter.loggedInAdmin(loggedInAdmin);
                        $state.go('admin');
                        return;
                    }
                    deferred.resolve();

                }
            }, function() {
                console.log("no response");
            });
        return deferred.promise;
    };
    this.createUser = function(username, type, password) {
        var deferred = $q.defer();
        var url = "http://localhost:3000/user";
        var data = {
            "username": username,
            "type": type,
            "password": password,
        };
        var config = {
            'Accept-Language': 'application/json',
            'Content-Type': 'application/json'
        }
        $http.post(url, data, config)
            .then(function(response) {
                var data = response.data;
                if (data.id) {
                    $state.go('success');
                    console.log("post succueful");
                    deferred.resolve();
                } else {
                    console.log("some error occured");
                }


            }, function() {
                console.log("not matched");
            });
        return deferred.promise;
    };

        this.loginDetail = function(){
            var loginDetail = $rootScope.loggedinUserData
        return loginDetail;
    }
}
