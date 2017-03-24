app.controller('ctrPago', function ($scope, $http, NgTableParams) {

    $scope.pago = {};
    $scope.pago.idpago = "";
    $scope.pago.estado = "";
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
        $scope.pago.concepto = "";
        $scope.pago.fecha = "";
        $scope.pago.total = ""; 
        $scope.pago.descripcion = "";
    

    };
    
//    $scope.validarBaja = function ()
//    {
//        if ($scope.pago.idpago === "")
//        {
//            sweetAlert("Exito!", "El registro de baja.", "success");
//
//        }
//    };
//    
//    $scope.validar = function ()
//    {
//        var ok = false;
//       if ($scope.pago.valorCmboCncept === "")
//        {
//            sweetAlert("Error...", "¡Ingrese Concepto!", "error");
//
//        } else
//        if ($scope.pago.fecha === "")
//        {
//            sweetAlert("Error...", "¡Ingrese Fecha!", "error");
//
//        } else
//        if ($scope.pago.total === "")
//        {
//            sweetAlert("Error...", "¡Ingrese Total!", "error");
//
//        } else
//        if ($scope.pago.descripcion === "")
//        {
//            sweetAlert("Error...", "¡Ingrese Descripcion!", "error");
//
//        } else
//        {
//            ok = true;
//        }
//        return ok;
//
//    };
    
     /// aqui llamo al de pago.js damePagosCliente  y main.js damePagosCliente
    $scope.devuelvePagos = function () {
        var cliente = {};
        cliente.idCliente = $scope.pago.idcliente;
        console.log(cliente);
        $http.post("http://localhost:3333/api/damePagosCliente", cliente).success(function (respuesta) {
            tblPagos.listaPagos = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: respuesta});
            console.log(respuesta);


        });
    };

    $scope.dameClientes = function () {
        $http.get("http://localhost:3333/api/clientes").success(function (respuesta) {
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
//        if ($scope.validar())
//        {
        //alert("va a entrar a guardar");
        $http.post("http://localhost:3333/api/guardarPago", $scope.pago).success(function (respuesta) {
            tblPagos.listaPagos = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: respuesta});
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
            tblPagos.listaPagos = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: respuesta});
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
            tblPagos.listaPagos = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: respuesta});
//            sweetAlert("Exito", "Registro Dado De Baja", "success");
            console.log(respuesta);
//            $scope.activarPagos = true;
        });
//        }
    };



    $scope.devuelvePagos();
    $scope.dameClientes();
    $scope.dameConceptos();


});
