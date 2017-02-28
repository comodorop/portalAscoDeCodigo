app.controller('ctrCliente', function ($scope, $http, NgTableParams) {

    $scope.cliente = {};
    $scope.cliente.idcliente = "";
    $scope.cliente.nombre = "";
    $scope.cliente.apellido = "";
    $scope.cliente.correo = "";
    $scope.cliente.telefono = "";
    $scope.guardarCliente = function () {
       
        
     if( $scope.validar())
     {
         sweetAlert("Correcto","¡Información enviada!","success");
     }
        
       
    };



    var tblClientes = this;
    $http.get("http://localhost:3333/api/clientes").success(function (data) {
        tblClientes.listaClientes = new NgTableParams({count: 4}, {counts: [25, 50, 100], dataset: data});
    });

    $scope.validarEmail = function (mail)
    {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
    };
    
  
        
       
    };

    $scope.validar = function () {
        var ok = true;
        if ($scope.cliente.nombre == "") {
           sweetAlert("Oops...", "Se requiere un nombre", "advertencia");
            ok=false;
        } else if ($scope.cliente.apellido == "") {
            sweetAlert("Oops...", "Se requiere un apellido", "warning");
            ok=false;
        } else if ($scope.cliente.correo != "") {
            if ($scope.validarEmail($scope.cliente.correo) == false) {
                sweetAlert("Error", "Correo electronico no valido", "warning");
                ok=false;
            }
        } else if ($scope.cliente.telefono == "") {
            sweetAlert("Oops...", "Se requiere un telefono", "warning");
            ok=false;
        }
        return ok;
    };


    $scope.guardarCliente = function () {
       if( $scope.validar())
       {
        alert("va a entrar a guardar");
        $http.post("http://localhost:3333/api/guardarCliente", $scope.cliente).success(function (respuesta) {
            tblClientes.listaClientes = new NgTableParams({count: 4}, {counts: [25, 50, 100], dataset: respuesta});
        });
    }else
    {alert("ocurrió un error");}
    };

    $scope.obtenerCliente = function (id) {

        $scope.cliente.idcliente = id;
        $http.post("http://localhost:3333/api/obtenerCliente", $scope.cliente).success(function (respuesta) {

            console.log(respuesta);
            $scope.cliente = respuesta;
        });
//        }
    };

    $scope.actualizarCliente = function () {
        $http.put("http://localhost:3333/api/actualizarCliente", $scope.cliente).success(function (respuesta) {
            tblClientes.listaClientes = new NgTableParams({count: 4}, {counts: [25, 50, 100], dataset: respuesta});
            console.log(respuesta);
        });
    };

    $scope.eliminarCliente = function (id) {
//        var ok = $scope.validar();
//        if (ok == true) {
        $scope.cliente.idcliente = id;
        alert("va a entrar a actualizar");
        $http.put("http://localhost:3333/api/eliminarCliente", $scope.cliente).success(function (respuesta) {
            console.log(respuesta);
        });
//        }
    };






});
