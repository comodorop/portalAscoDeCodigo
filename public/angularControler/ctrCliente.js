app.controller('ctrCliente', function ($scope, $http) {

    $scope.cliente = {};
    $scope.cliente.nombre = "";
    $scope.cliente.apellido = "";
    $scope.cliente.correo = "";
    $scope.cliente.telefono = "";
    $http.get("http://localhost:3333/api/cliente").success(function (data) {
        $scope.listaClientes = data;
    });

    $scope.validar = function () {
        var ok = false;
        if ($scope.cliente.nombre == "") {
            sweetAlert("Oops...", "Se requiere un nombre", "warning");
        } else {
            ok = true;
        }
    };


    $scope.guardarClientes = function () {
        $http.post("http://localhost:3333/api/guardarClientes", $scope.cliente).success(function (respuesta) {
            console.log(respuesta);
            if (respuesta.idRespuesta == 1) {
                alert("Nuevo Cliente");

                $scope.listaClientes = respuesta;
            }
        });
    };


});