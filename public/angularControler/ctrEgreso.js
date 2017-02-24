app.controller('ctrEgreso', function ($scope, $http, NgTableParams) {

    $scope.egreso = {};
    $scope.egreso.idegreso = "";
    $scope.egreso.idcliente = "";
    $scope.egreso.estado = "";
    $scope.egreso.concepto = "";
    $scope.egreso.descripcion = "";
    $scope.egreso.total = "";
    $scope.egreso.fecha = "";



    var tblEgresos = this;
    $http.get("http://localhost:3333/api/egresos").success(function (data) {
        tblEgresos.listaEgresos= new NgTableParams({count: 4}, {counts: [25, 50, 100], dataset: data});
    });

//    $scope.validarEmail = function (mail)
//    {
//        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
//    };
//
//    $scope.validar = function () {
//        var ok = false;
//        if ($scope.cliente.nombre == "") {
//            sweetAlert("Oops...", "Se requiere un nombre", "warning");
//        } else if ($scope.cliente.apellido == "") {
//            sweetAlert("Oops...", "Se requiere un apellido", "warning");
//        } else if ($scope.cliente.correo != "") {
//            if ($scope.validarEmail($scope.cliente.correo) == false) {
//                sweetAlert("Error", "Correo electronico no valido", "warning");
//            }
//        } else if ($scope.cliente.telefono == "") {
//            sweetAlert("Oops...", "Se requiere un telefono", "warning");
//        }
//        return ok;
//    };


    $scope.guardarEgreso = function () {
        alert("va a entrar a guardar");
        $http.post("http://localhost:3333/api/guardarEgreso", $scope.egreso).success(function (respuesta) {
            tblEgresos.listaEgresos= new NgTableParams({count: 4}, {counts: [25, 50, 100], dataset: data});
        });
    };

    $scope.obtenerEgreso = function (id) {

        $scope.egreso.idegreso= id;
        $http.post("http://localhost:3333/api/obtenerEgreso", $scope.egreso).success(function (respuesta) {

            console.log(respuesta);
            $scope.egreso = respuesta;
        });
//        }
    };

    $scope.actualizarEgreso = function () {
        $http.put("http://localhost:3333/api/actualizarEgreso", $scope.egreso).success(function (respuesta) {
            tblEgresos.listaEgresos= new NgTableParams({count: 4}, {counts: [25, 50, 100], dataset: data});
            console.log(respuesta);
        });
    };

    $scope.bajaEgreso = function (id) {
//        var ok = $scope.validar();
//        if (ok == true) {
        $scope.egreso.idegreso = id;
        alert("va a entrar a actualizar");
        $http.put("http://localhost:3333/api/bajaEgreso", $scope.egreso).success(function (respuesta) {
            console.log(respuesta);
        });
//        }
    };






});

