app.controller('ctrCliente', function ($scope, $http) {

    $scope.cliente = {};
    $scope.cliente.nombre = "";
    $scope.cliente.apellido = "";
    $scope.cliente.correo = "";
    $scope.cliente.telefono = "";


    $scope.validar = function () {
        var ok = false;
        if ($scope.cliente.nombre == "") {
            sweetAlert("Oops...", "Se requiere un nombre", "warning");
        } else {
            ok = true;
        }
    };


    $scope.guardarClientes = function () {

        var ok = $scope.validar();
        if (ok == true) {

            console.log($scope.cliente);
        }
    };


});