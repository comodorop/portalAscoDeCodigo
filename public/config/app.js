var app = angular.module('app', ['ngRoute', 'ngTable', 'ngMask', 'jkuri.datepicker', 'localytics.directives']);
app.config(function ($routeProvider) {
    $routeProvider.when('/cliente', {
        templateUrl: './views/cliente.html',
        controller: 'ctrCliente',
        controllerAs: 'cl'
    }).when('/curso', {
        templateUrl: './views/curso.html',
        controller: 'ctrCurso',
        controllerAs: 'cr'

    }).when('/horario', {
        templateUrl: './views/horario.html',
        controller: 'ctrHorario',
        controllerAs: 'hr'
    }).when('/aula', {
        templateUrl: './views/aula.html',
        controller: 'ctrAula',
        controllerAs: 'au'
    }).when('/egreso', {
        templateUrl: './views/egreso.html',
        controller: 'ctrEgreso',
        controllerAs: 'eg'
    }).when('/abono', {
        templateUrl: './views/abono.html',
        controller: 'ctrAbono',
        controllerAs: 'ab'
    }).when('/pago', {
        templateUrl: './views/pago.html',
        controller: 'ctrPago',
        controllerAs: 'pg'
    });
});

