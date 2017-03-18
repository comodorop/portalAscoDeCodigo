app.controller('ctrPago', function ($scope, $http, NgTableParams) {

    $scope.pago = {};
    $scope.pago.idpago = "";
    $scope.pago.estado = "";
    $scope.pago.concepto = "";
    $scope.pago.total = "";
    $scope.pago.fecha = "";
    $scope.pago.descripcion = "";
    $scope.pago.curso = "";

//    $scope.mostrarBoton = false;
//    $scope.ocultarBoton = false;
//    $scope.activarBtnGuardar = false;

    $scope.CancelarPago = function () {

    $scope.pago.idpago = "";
    $scope.pago.concepto = "";
    $scope.pago.total = "";
    $scope.pago.fecha = "";
    $scope.pago.descripcion = "";
    $scope.pago.curso = "";

    };
    
    $scope.dameClientes = function () {
        $http.get("http://localhost:3333/api/clientes").success(function (respuesta) {
            console.log(respuesta);
            $scope.listaClientes = respuesta;
        });
    };
    
    var tblPagos = this;
    $http.get("http://localhost:3333/api/pagos").success(function (data) {
        tblPagos.listaPagos = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: data});
    });


    $scope.guardarPago = function () {
        //alert("va a entrar a guardar");
        $http.post("http://localhost:3333/api/guardarPago", $scope.pago).success(function (respuesta) {
            tblPagos.listaPagos = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: respuesta});
            //sweetAlert("Exito", "Nuevo registro disponible", "success");
            $scope.CancelarPago();
            //  $scope.ocultarBoton = true;


        });
    };

    $scope.obtenerPago = function (id) {

        $scope.pago.idpago = id;
        $http.post("http://localhost:3333/api/obtenerPago", $scope.pago).success(function (respuesta) {

            console.log(respuesta);
            $scope.pago = respuesta;
//            $scope.mostrarBoton = true;
//            $scope.ocultarBoton = true;

        });
//        }
    };

    $scope.actualizarPago = function () {
        $http.put("http://localhost:3333/api/actualizarPago", $scope.pago).success(function (respuesta) {
            tblPagos.listaPagos = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: respuesta});
            console.log(respuesta);
            $scope.pago = respuesta;
//            $scope.mostrarBoton = true;

        });
    };

    $scope.eliminarPago = function (id) {
//        var ok = $scope.validar();
//        if (ok == true) {
        $scope.pago.idpago = id;
        //alert("va a entrar a eliminar");
        $http.put("http://localhost:3333/api/eliminarPago", $scope.pago).success(function (respuesta) {
            tblPagos.listaPagos = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: respuesta});
            console.log(respuesta);
//            $scope.activarPagos = true;
        });
//        }
    };




$scope.dameClientes();



});
