var app = angular.module('app', ['ngRoute','ngTable']);
app.config(function ($routeProvider) {
    $routeProvider.when('/cliente', {
        templateUrl: './views/cliente.html',
        controller: 'ctrCliente'
    });

});