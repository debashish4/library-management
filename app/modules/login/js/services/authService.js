angular.module('loginModule').service('authService', authService)

function authService($http, $state, $q) {
    this.authenticateLogin = function(username, type, password) {
        var deferred = $q.defer();
        // $http.get("http://localhost:3000/user?name=" + username)
        $http.post("http://localhost:3000/posts/", { "something": "working" }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            })
            .then(
                function(response) {
                    console.log(response);
                },
                function(response) {
                    // failure callback
                }
            );
        // $http.get("http://localhost:3000/user?name=" + username)
        //     .then(function(response) {
        //         if (!response.data.length) {
        //             console.log(response);
        //             console.log("not matched2");
        //             deferred.resolve();
        //         } else if (response.data[0].password === password && response.data[0].type === type) {
        //             console.log("matched");
        //             if (type === "user") {
        //                 $state.go('user');
        //             } else {
        //                 $state.go('admin');
        //             }

        //         }
        //     }, function() {
        //         console.log("not matched");
        //     });
        $http.post('http://localhost:3000/posts/', { "tst": "tst1111" }).then(successCallback, errorCallback);
        return deferred.promise;
    }
}
