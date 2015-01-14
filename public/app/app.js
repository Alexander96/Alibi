var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){

    $routeProvider
        .when('/', {
            templateUrl : '/partials/main/home',
            controller: 'MainController'
        })
        .when('/company', {
            templateUrl : '/partials/main/home',
            controller: 'MainController'  
        })
        .otherwise({ redirectTo: '/' });

});