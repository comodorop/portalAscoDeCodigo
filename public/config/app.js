var app = angular.module('app', ['ngRoute', 'ngTable', 'ngMask']);
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
    });

    app.config("PruebaController", function ($scope) {
        $scope.dias = [
            {
                idhorario: 2,
                dia: "Domingo"
            },
            {
                idhorario: 3,
                dia: "Lunes"
            },
            {
                idhorario: 4,
                dia: "Martes"
            },
            {
                idhorario: 5,
                dia: "Miercoles"
            },
            {
                idhorario: 6,
                dia: "Jueves"
            },
            {
                idhorario: 7,
                dia: "Viernes"
            }
        ];

        $scope.DiaSeleccionada = {
            idhorario: 8,
            dia: "Sabado"
        }

    });
});
