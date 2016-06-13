var app = angular.module('mainApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'page.html'
		
	})
	.when('/helloUser', {
		templateUrl: 'hello.html'
	})
	.otherwise({
		redirectTo : '/'
	});
}]);
