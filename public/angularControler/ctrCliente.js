app.controller('ctrCliente', function ($scope, $http, NgTableParams) {

    $scope.cliente = {};
    $scope.cliente.idcliente = "";
    $scope.cliente.nombre = "";
    $scope.cliente.apellido = "";
    $scope.cliente.correo = "";
    $scope.cliente.telefono = "";

    $scope.mostrarBoton = false;
    $scope.ocultarBoton = false;
    $scope.activarBtnGuardar = false;



//    $scope.formVisibility=false;
//    $scope.obtenerCliente=function(){
//      $scope.formVisibility=true;
//      console.log($scope.formVisibility)
//    };
//    $scope.obtenerCliente = function () {
//        $scope('actualizarCliente').hide();
//        $scope('actualizarCliente').show();
//    };

    $scope.CancelarCliente = function () {

        $scope.cliente.idcliente = 0;
        $scope.cliente.nombre = "";
        $scope.cliente.apellido = "";
        $scope.cliente.correo = "";
        $scope.cliente.telefono = "";

    };

    var tblClientes = this;
    $http.get("http://localhost:3333/api/clientes").success(function (data) {
        tblClientes.listaClientes = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: data});
    });

    $scope.validarEmail = function (mail)
    {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
    };
    

    $scope.validarBaja = function ()
    {
        if ($scope.cliente.idcliente === "")
        {
            sweetAlert("Exito!", "El registro de baja.", "success");

        }
    };

    $scope.validar = function ()
    {
        var ok = false;
        if ($scope.cliente.nombre === "")
        {
            sweetAlert("Error...", "¡Ingrese Nombre!", "error");

        } else
        if ($scope.cliente.apellido === "")
        {
            sweetAlert("Error...", "¡Ingrese Apellido!", "error");

        } else
        if ($scope.cliente.correo === "")
        {
            if ($scope.validarEmail($scope.cliente.correo) === false) {
                sweetAlert("Error", "Correo electronico no valido", "warning");

            }
        } else
        if ($scope.cliente.telefono === "")
        {
            sweetAlert("Error...", "¡Ingrese Telefono!", "error");

        } else
        {
            ok = true;
        }
        return ok;

    };



    $scope.guardarCliente = function () {
        if ($scope.validar())
        {
            //alert("va a entrar a guardar");
            $http.post("http://localhost:3333/api/guardarCliente", $scope.cliente).success(function (respuesta) {
                tblClientes.listaClientes = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: respuesta});
                sweetAlert("Exito", "Nuevo registro disponible", "success");
                $scope.CancelarCliente();
                $scope.ocultarBoton = true;


            });

        }
    };

    $scope.obtenerCliente = function (id) {

        $scope.cliente.idcliente = id;
        $http.post("http://localhost:3333/api/obtenerCliente", $scope.cliente).success(function (respuesta) {

            console.log(respuesta);
            $scope.cliente = respuesta;
            $scope.mostrarBoton = true;
            $scope.ocultarBoton = true;

        });
//        }
    };

    $scope.actualizarCliente = function () {
        if ($scope.validar())
        {
            $http.put("http://localhost:3333/api/actualizarCliente", $scope.cliente).success(function (respuesta) {
                tblClientes.listaClientes = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: respuesta});
                sweetAlert("Exito", "Registro actualizado", "success");
//             console.log(respuesta);
//            $scope.cliente = respuesta;
                $scope.mostrarBoton = true;
                $scope.CancelarCliente();

            });
        }
    };

    $scope.eliminarCliente = function (id) {
        $scope.cliente.idcliente = id;
        //alert("va a entrar a eliminar");
        $http.put("http://localhost:3333/api/eliminarCliente", $scope.cliente).success(function (respuesta) {
            tblClientes.listaClientes = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: respuesta});
            sweetAlert("Exito", "Registro Dado De Baja", "success");
            console.log(respuesta);
            $scope.activarClientes = true;
        });

    };

    $scope.activarCliente = function (id) {
//        var ok = $scope.validar();
//        if (ok == true) {
        $scope.cliente.idcliente = id;
        //alert("va a entrar a eliminar");
        $http.put("http://localhost:3333/api/activarClientes", $scope.cliente).success(function (respuesta) {
            tblClientes.listaClientes = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: respuesta});
            console.log(respuesta);
        });
//        }
    };



});
