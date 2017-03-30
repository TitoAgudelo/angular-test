app.controller('myCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.getRepo = function() {
		console.log($scope.username);
		return $http.get('https://api.github.com/users/' + $scope.username + '/repos')
        .then(success)
        .catch(fail);

		function success(response) {
			$scope.listRepo = response.data;			
		}

		function fail(e) {
 			console.log(exception.catcher('XHR Failed for getPeople')(e));
        }
	}

}]);