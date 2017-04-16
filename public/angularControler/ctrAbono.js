//app.controller('ctrAbono', function ($scope, $http, NgTableParams) {
//
//    $scope.abono = {};
//    $scope.abono.idabono = "";
//    $scope.abono.idpago = "";
//    $scope.abono.abono = "";
//    $scope.abono.saldo = "";
//  
//
//    var tblAbonos = this;
//    $http.get("http://localhost:3333/api/abonos").success(function (data) {
//        tblAbonos.listaAbonos = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: data});
//    });
//
//
//
//    $scope.guardarAbono = function () {
//        if ($scope.validar())
//        {
//            //alert("va a entrar a guardar");
//            $http.post("http://localhost:3333/api/guardarAbono", $scope.abono).success(function (respuesta) {
//                tblAbonos.listaAbonos = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: respuesta});
//                sweetAlert("Exito", "Nuevo registro disponible", "success");
////                $scope.CancelarCliente();
////                $scope.ocultarBoton = true;
//
//
//            });
//
//        }
//    };
//
//    $scope.obtenerAbono = function (id) {
//
//        $scope.abono.idabono = id;
//        $http.post("http://localhost:3333/api/obtenerAbono", $scope.abono).success(function (respuesta) {
//
//            console.log(respuesta);
//            $scope.cliente = respuesta;
////            $scope.mostrarBoton = true;
////            $scope.ocultarBoton = true;
//
//        });
////        }
//    };
//
//    $scope.actualizarAbono = function () {
//        if ($scope.validar())
//        {
//            $http.put("http://localhost:3333/api/actualizarAbono", $scope.abono).success(function (respuesta) {
//                tblAbonos.listaAbonos = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: respuesta});
//                sweetAlert("Exito", "Registro actualizado", "success");
//////             console.log(respuesta);
//////            $scope.cliente = respuesta;
////                $scope.mostrarBoton = true;
////                $scope.CancelarCliente();
//
//            });
//        }
//    };
//
//    $scope.eliminarAbono = function (id) {
//        $scope.abono.idabono = id;
//        //alert("va a entrar a eliminar");
//        $http.put("http://localhost:3333/api/eliminarAbono", $scope.abono).success(function (respuesta) {
//            tblAbonos.listaAbonos = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: respuesta});
//            console.log(respuesta);
//            sweetAlert("Exito", "Registro Dado De Baja", "success");
//        });
//
//    };
//
//    $scope.activarAbono = function (id) {
//        console.log(id);
////        var ok = $scope.validar();
////        if (ok == true) {
//        $scope.abono.idabono = id;
//        //alert("va a entrar a eliminar");
//        $http.put("http://localhost:3333/api/activarAbono", $scope.abono).success(function (respuesta) {
//            tblAbonos.listaAbonos = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: respuesta});
//            console.log(respuesta);
//            sweetAlert("Exito", "Registro Dado De Alta", "success");
//
//        });
//
//    };
//
//});
