var app = angular.module("myApp", ["ngRoute"]);


app.config(function($routeProvider) {
   $routeProvider
   .when("/", {
       templateUrl : "template/first.html"
   })
   .when("/second", {
   		templateUrl : "template/second.html"
   })
});


