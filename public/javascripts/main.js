var appname = angular.module('appname', []);
appname.controller('appCtrl', ['$scope','$http',
  function($scope,$http) {
    $scope.greeting = { text: 'Hello AngularJS Here' };
    $scope.apiCall = function(){
		$http.get("/api/test").then(function(response) {
		    $scope.response = response.data;
		    console.log(response);
		});
    };

    $scope.formMessage;
    $scope.numberInput;
    $scope.formSubmit = function(){
    	$http.post("/api/evenOrOdd", {
    		numberInput: $scope.numberInput
    	}).then(function(response) {
    		console.log(response.data);
    		$scope.formMessage = response.data;
		});
    }
}]);