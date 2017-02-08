var app = angular.module('app', ['ngRoute','ngTable']);
app.config(function ($routeProvider) {
    $routeProvider.when('/cliente', {
        templateUrl: './views/cliente.html',
        controller: 'ctrCliente',
        controllerAs:'cl'
    }).when('/curso', {
        templateUrl: './views/curso.html',
        controller: 'ctrCurso'
    });
    
    
    
    
    
    
});
