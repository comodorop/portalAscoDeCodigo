app.controller('ctrMain', function ($scope, $http) {

    $scope.usuarios = {};
    $scope.usuarios.idUsuario = 0;
    $scope.usuarios.nombre = "";
    $scope.usuarios.correo = "";
    $scope.usuarios.telefono = "";
    $http.get("http://localhost:3333/api/usuarios").success(function (data) {
        $scope.listaAlumnos = data;
    });

    $scope.guardarUsuarios = function () {
        $http.post("http://localhost:3333/api/guardarUsuarios", $scope.usuarios).success(function (respuesta) {
        });
    };





});