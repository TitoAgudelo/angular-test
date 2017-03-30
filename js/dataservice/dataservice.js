app.factory('dataservice', ['$http', '$q', function($http, $q) {
	var service = {
      getRepo: getRepo
    }

    function getRepo () {

  	var onSuccess = function(response){
    	$scope.repos = response.data;
    	$scope.error = null;
  	};
  	var onError = function(response){
    	$scope.error = 'Kullanıcı bulunamadı!';
    	$scope.repos = null;
  	};
  
  	$scope.getGithubRepos = function(){
    	$http.get('https://api.github.com/users/' + $scope.kullaniciadi + '/repos')
    		.then(onSuccess, onError);
  		};
    }
}])