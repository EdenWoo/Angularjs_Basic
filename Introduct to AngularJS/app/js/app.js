
var app=angular.module("app",[]).config(function($routeProvider){
	$routeProvider.when('/login',
	{
		templateUrl:'login.html',
		controller:'LoginController'
	});

	$routeProvider.when('/home',{
		templateUrl:'home.html',
		controller:'HomeController'
	});
	$routeProvider.otherwise({redirectTo:'/login'});
});

app.controller('LoginController',function($scope,$location){

	$scope.credentials={username:"",password:""};
	$scope.login=function(){
		if($scope.credentials.username!=="dfdf"){
			alert('username wrong');
			$location.path('/home');
		}
	};
});
app.controller('HomeController',function(){

});