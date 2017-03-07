app.controller('ctrEgreso', function ($scope, $http, NgTableParams) {

    $scope.egreso = {};
    $scope.egreso.idegreso = "";
    $scope.egreso.idabono = "";
    $scope.egreso.idcliente = "";
    $scope.egreso.concepto = "";
    $scope.egreso.descripcion = "";
    $scope.egreso.total = "";
    $scope.egreso.fecha = "";
    
    $scope.CancelarEgreso = function () {

    $scope.egreso.idegreso = "";
    $scope.egreso.idabono = "";
    $scope.egreso.idcliente = "";
    $scope.egreso.concepto = "";
    $scope.egreso.descripcion = "";
    $scope.egreso.total = "";
    $scope.egreso.fecha = "";

    };

    var tblEgresos = this;
    $http.get("http://localhost:3333/api/egresos").success(function (data) {
        tblEgresos.listaEgresos = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: data});
    });

//    $scope.validar = function ()
//    {
//        var ok = false;
//        if ($scope.cliente.nombre === "")
//        {
//            sweetAlert("Error...", "¡Ingrese Nombre!", "error");
//
//        } else
//        if ($scope.cliente.apellido === "")
//        {
//            sweetAlert("Error...", "¡Ingrese Apellido!", "error");
//
//        } else
//        if ($scope.cliente.correo === "")
//        {
//            if ($scope.validarEmail($scope.cliente.correo) === false) {
//                sweetAlert("Error", "Correo electronico no valido", "warning");
//
//            }
//        } else
//        if ($scope.cliente.telefono === "")
//        {
//            sweetAlert("Error...", "¡Ingrese Telefono!", "error");
//
//        } else
//        {
//            ok = true;
//        }
//        return ok;
//
//    };


    $scope.guardarEgreso = function () {
        if ($scope.validar())
        {
            //alert("va a entrar a guardar");
            $http.post("http://localhost:3333/api/guardarEgreso", $scope.egreso).success(function (respuesta) {
                tblEgresos.listaEgresos = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: respuesta});
                sweetAlert("Exito", "Nuevo registro disponible", "success");
                $scope.CancelarEgreso();
            });
            
        }
    };

    $scope.obtenerEgreso = function (id) {

        $scope.egreso.idegreso = id;
        $http.post("http://localhost:3333/api/obtenerEgreso", $scope.egreso).success(function (respuesta) {

            //console.log(respuesta);
            $scope.egreso = respuesta;
        });
//        }
    };

    $scope.actualizarEgreso = function () {
        $http.put("http://localhost:3333/api/actualizarEgreso", $scope.egreso).success(function (respuesta) {
            tblEgresos.listaEgresos = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: respuesta});
            // console.log(respuesta);
        });
    };

    $scope.eliminarEgreso = function (id) {
//        var ok = $scope.validar();
//        if (ok == true) {
        $scope.egreso.idegreso = id;
        //alert("va a entrar a eliminar");
        $http.put("http://localhost:3333/api/eliminarEgreso", $scope.egreso).success(function (respuesta) {
            tblEgresos.listaEgresos = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: respuesta});
            //console.log(respuesta);
        });
//        }
    };

});
