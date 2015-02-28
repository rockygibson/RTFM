var app = angular.module('rtfmApp');

app.controller('loginCtrl', function($scope, EnvironmentService, $location){
	$scope.env = EnvironmentService.getEnv();

	$scope.logMeIn = function(username){
		alert(username);
		$location.path('/threads')
	}

	// $scope.$apply(function(){
	// 	$location.path('/login/' + user.uid)
	// })

})