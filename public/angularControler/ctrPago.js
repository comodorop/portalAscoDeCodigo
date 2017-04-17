app.controller('ctrPago', function ($scope, $http, NgTableParams) {

    $scope.pago = {};
    $scope.pago.idpago = "";
    $scope.pago.idcliente = "";
    $scope.pago.concepto = "";
    $scope.pago.total = "";
    $scope.pago.fecha = "";
    $scope.pago.descripcion = "";
    var tblPagos = this;

    $scope.mostrarBoton = false;
    $scope.ocultarBoton = false;
    $scope.activarBtnGuardar = false;



    $scope.CancelarPago = function () {

        $scope.pago.idpago = "";
        $scope.pago.idcliente = "";
        $scope.pago.concepto = "";
        $scope.pago.fecha = "";
        $scope.pago.total = "";
        $scope.pago.descripcion = "";


    };


    /// aqui llamo al de pago.js damePagosCliente  y main.js damePagosCliente
    $scope.devuelvePagos = function () {
        var cliente = {};
        cliente.idcliente = $scope.pago.idcliente;
        console.log(cliente);
        $http.post("http://localhost:3333/api/damePagosCliente", cliente).success(function (respuesta) {
            tblPagos.listaPagos = new NgTableParams({count: 3}, {counts: [25, 50, 100], dataset: respuesta});
            console.log(respuesta);


        });
    };

    $scope.dameClientesActivo = function () {
        $http.get("http://localhost:3333/api/dameClientesActivo").success(function (respuesta) {
            console.log(respuesta);
            $scope.listaClientes = respuesta;
        });
    };

    $scope.dameConceptos = function () {
        $http.get("http://localhost:3333/api/conceptos").success(function (respuesta) {
            //  console.log(respuesta);
            $scope.lstConceptos = respuesta;

        });
    };

    $scope.guardarPago = function () {

        $http.post("http://localhost:3333/api/guardarPago", $scope.pago).success(function (respuesta) {
            tblPagos.listaPagos = new NgTableParams({count: 3}, {counts: [25, 50, 100], dataset: respuesta});
            //sweetAlert("Exito", "Nuevo registro disponible", "success");
            $scope.CancelarPago();
            $scope.ocultarBoton = true;
        });
//    }
    };

    $scope.obtenerPago = function (id) {

        $scope.pago.idpago = id;
        $http.post("http://localhost:3333/api/obtenerPago", $scope.pago).success(function (respuesta) {

            console.log(respuesta);
            $scope.pago = respuesta;
            $scope.mostrarBoton = true;
            $scope.ocultarBoton = true;

        });
//        }
    };

    $scope.actualizarPago = function () {
//        if ($scope.validar())
//        {
        $http.put("http://localhost:3333/api/actualizarPago", $scope.pago).success(function (respuesta) {
            tblPagos.listaPagos = new NgTableParams({count: 3}, {counts: [25, 50, 100], dataset: respuesta});
//            console.log(respuesta);
//            $scope.pago = respuesta;
            $scope.mostrarBoton = true;
            $scope.CancelarPago();

        });
//     }
    };

    $scope.eliminarPago = function (id) {
//        var ok = $scope.validar();
//        if (ok == true) {
        $scope.pago.idpago = id;
        //alert("va a entrar a eliminar");
        $http.put("http://localhost:3333/api/eliminarPago", $scope.pago).success(function (respuesta) {
            tblPagos.listaPagos = new NgTableParams({count: 3}, {counts: [25, 50, 100], dataset: respuesta});
//            sweetAlert("Exito", "Registro Dado De Baja", "success");
            console.log(pago);
//            $scope.activarPagos = true;
        });
//        }
    };

    $scope.activarPago = function (id) {
        $scope.pago.idpago = id;
//        alert("va a entrar a activar el estado");
        $http.put("http://localhost:3333/api/activarPago", $scope.pago).success(function (respuesta) {
            tblPagos.listaPagos = new NgTableParams({count: 3}, {counts: [25, 50, 100], dataset: respuesta});
            sweetAlert("Exito", "Registro Dado De Alta", "success");
            console.log(pago);
        });
    };



    $scope.devuelvePagos();
    $scope.dameClientesActivo();
    $scope.dameConceptos();


    $scope.abrirModal = function (idpago) {
        $("#mdlAbonos").modal('show');
    };

    $scope.abrirModal1 = function (idpago) {
        $("#mdlSaldos").modal('show');
    };

    $scope.abrirMoadal2 = function (idpago) {
        $("#mdlcancelado").modal('show');
    };

    //AQUI EMPIEZA CTRABONO.JS
    $scope.abono = {};
    $scope.abono.idabono = "";
    $scope.abono.idpago = "";
    $scope.abono.abono = "";


    var tblAbonos = this;
    $http.get("http://localhost:3333/api/abonos").success(function (data) {
        tblAbonos.listaAbonos = new NgTableParams({count: 3}, {counts: [25, 50, 100], dataset: data});
    });

    $scope.dameSumaAbono = function () {
        $http.post("http://localhost:3333/api/dameSumaAbono", $scope.abono).success(function (respuesta) {
            console.log(respuesta);
            $scope.listaAbonos = respuesta;

        });
    };



    $scope.guardarAbono = function () {
        if ($scope.validar())
        {
            //alert("va a entrar a guardar");
            $http.post("http://localhost:3333/api/guardarAbono", $scope.abono).success(function (respuesta) {
                tblAbonos.listaAbonos = new NgTableParams({count: 3}, {counts: [25, 50, 100], dataset: respuesta});
                sweetAlert("Exito", "Nuevo registro disponible", "success");
//                $scope.CancelarCliente();
//                $scope.ocultarBoton = true;


            });

        }
    };

    $scope.obtenerAbono = function (id) {

        $scope.abono.idabono = id;
        $http.post("http://localhost:3333/api/obtenerAbono", $scope.abono).success(function (respuesta) {

            console.log(respuesta);
            $scope.cliente = respuesta;
//            $scope.mostrarBoton = true;
//            $scope.ocultarBoton = true;

        });
//        }
    };

    $scope.actualizarAbono = function () {
        if ($scope.validar())
        {
            $http.put("http://localhost:3333/api/actualizarAbono", $scope.abono).success(function (respuesta) {
                tblAbonos.listaAbonos = new NgTableParams({count: 3}, {counts: [25, 50, 100], dataset: respuesta});
                sweetAlert("Exito", "Registro actualizado", "success");
////             console.log(respuesta);
////            $scope.cliente = respuesta;
//                $scope.mostrarBoton = true;
//                $scope.CancelarCliente();

            });
        }
    };

    $scope.eliminarAbono = function (id) {
        $scope.abono.idabono = id;
        //alert("va a entrar a eliminar");
        $http.put("http://localhost:3333/api/eliminarAbono", $scope.abono).success(function (respuesta) {
            tblAbonos.listaAbonos = new NgTableParams({count: 3}, {counts: [25, 50, 100], dataset: respuesta});
            console.log(respuesta);
            sweetAlert("Exito", "Registro Dado De Baja", "success");
        });

    };

    $scope.activarAbono = function (id) {
        console.log(id);
//        var ok = $scope.validar();
//        if (ok == true) {
        $scope.abono.idabono = id;
        //alert("va a entrar a eliminar");
        $http.put("http://localhost:3333/api/activarAbono", $scope.abono).success(function (respuesta) {
            tblAbonos.listaAbonos = new NgTableParams({count: 3}, {counts: [25, 50, 100], dataset: respuesta});
            console.log(respuesta);
            sweetAlert("Exito", "Registro Dado De Alta", "success");

        });

    };


});
