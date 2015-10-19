var myApp = angular.module('myApp', []);

myApp.factory('Dataest', function(){
	var Dataest = {};
	Dataest.casts = [
		{name: 'John', age: 18},
		{name: 'Polar', age: 16},
		{name: 'Susen', age: 20},
		{name: 'Qiuen', age: 17},
		{name: 'Money', age: 23},
		{name: 'Lucy', age: 13},
		{name: 'Geoge', age: 25},
	];

	return Dataest;
})

myApp.controller('demo', function($scope, Dataest) {
	$scope.dataest = Dataest.casts;
})