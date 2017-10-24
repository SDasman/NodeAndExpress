var appname = angular.module('appname', []);
appname.controller('appCtrl', ['$scope','$http',
  function($scope,$http) {
    $scope.greeting = { text: 'Hello AngularJS Here' };
    $scope.apiCall = function(){
		$http.get("/api/test")
			.then(function(data) {
		    $scope.response = data.data;
		    console.log(data);
		});
    };
}]);