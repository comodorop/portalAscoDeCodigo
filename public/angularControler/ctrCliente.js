app.controller('ctrCliente', function ($scope, $http, NgTableParams) {

    $scope.cliente = {};
    $scope.cliente.nombre = "";
    $scope.cliente.apellido = "";
    $scope.cliente.correo = "";
    $scope.cliente.telefono = "";
//    alert("click");


    var tblClientes = this;
    $http.get("http://localhost:3333/api/clientes").success(function (data) {
        tblClientes.listaClientes = new NgTableParams({count:4}, {counts: [25, 50, 100], dataset: data});
        console.log(data);
//        $scope.listaClientes = data;
    });

    $scope.validarEmail = function (mail)
    {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
    };

    $scope.validar = function () {
        var ok = false;
        if ($scope.cliente.nombre == "") {
            sweetAlert("Oops...", "Se requiere un nombre", "warning");
        } else if ($scope.cliente.apellido == "") {
            sweetAlert("Oops...", "Se requiere un apellido", "warning");
        } else if ($scope.cliente.correo != "") {
            if ($scope.validarEmail($scope.cliente.correo) == false) {
                sweetAlert("Error", "Correo electronico no valido", "warning");
            }
        } else if ($scope.cliente.telefono == "") {
            sweetAlert("Oops...", "Se requiere un telefono", "warning");
        }
        return ok;
    };

    $scope.guardarCliente = function () {
//        var ok = $scope.validar();
//        if (ok == true) {
            alert("va a entrar a guardar");
            $http.post("http://localhost:3333/api/guardarCliente", $scope.cliente).success(function (respuesta) {
                console.log(respuesta);
            });
//        }
    };






});