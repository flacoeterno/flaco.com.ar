'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication','$http','$interval',
  function ($scope,Authentication, $http, $interval) {
	// This provides Authentication context.
	$scope.authentication = Authentication;
	var url = '/modules/core/client/datasets/items.json';
	$http.get(url).success(function(data){
		$scope.lyrics = data;
	});
	$interval(function(){
		$scope.random();
	},6000);
	$scope.random = function() {
		return 0.5 - Math.random();
	};
}
]);
