app.controller('ctrAula', function ($scope, $http, NgTableParams) {

    $scope.aula = {};
    $scope.aula.idaula = "";
    $scope.aula.idhorario = "";
    $scope.aula.nombreaula = "";
    $scope.aula.fechaInicio = "";
    $scope.aula.fechaFinal = "";
    
    $scope.mostrarBoton = false;
    $scope.ocultarBoton = false;
    $scope.activarBtnGuardar = false;
    
    
    $scope.CancelarAula = function () {

        $scope.aula.idaula = "";
        $scope.aula.idhorario = "";
        $scope.aula.nombreaula = "";
        $scope.aula.fechaInicio = "";
        $scope.aula.fechaFinal = "";

    };

    $scope.dameHorarios = function () {
        $http.get("http://localhost:3333/api/horarios").success(function (respuesta) {
            console.log(respuesta);
            $scope.listaHorarios = respuesta;
        });
    };
    
        //dameAula
    var tblAulas = this;
    $http.get("http://localhost:3333/api/aulas").success(function (data) {
        console.log("INFROAMCIONA   ");
        console.log(data);
        tblAulas.listaAulas = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: data});
    });
    
     $scope.validarBaja = function ()
    {
        if ($scope.aula.idaula === "")
        {
            sweetAlert("Exito!", "El registro de baja.", "success");

        }
    };
    
     $scope.validar = function ()
    {
        var ok = false;
        if ($scope.aula.idhorario === "")
        {
            sweetAlert("Upss", "¡Ingrese El Día y Curso!", "warning");

        } else
        if ($scope.aula.nombreaula === "")
        {
            sweetAlert("Upss", "¡Ingrese NombreAula!", "warning");

        } else
        if ($scope.aula.fechaInicio === "")
        {
            sweetAlert("Upss", "¡Ingrese Fecha De Inicio!", "warning");

        } else
        if ($scope.aula.fechaFinal === "")
        {
            sweetAlert("Upss", "¡Ingrese Fecha Final!", "warning");

        } else
        {
            ok = true;
        }
        return ok;

    };

    $scope.guardarAula = function () {
        if($scope.validar())
        {
//        console.log($scope.aula);
        $http.post("http://localhost:3333/api/guardarAula", $scope.aula).success(function (respuesta) {
            tblAulas.listaAulas = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: respuesta});
            sweetAlert("Exito", "Nuevo registro disponible", "success");
//            console.log(respuesta);
            $scope.CancelarAula();
            $scope.ocultarBoton = true;
        });
    }
    };

    $scope.obtenerAula = function (id) {

        $scope.aula.idaula = id;
        $http.post("http://localhost:3333/api/obtenerAula", $scope.aula).success(function (respuesta) {

            console.log(respuesta);
            $scope.aula = respuesta;
            $scope.mostrarBoton = true;
            $scope.ocultarBoton = true;
        });
//        }
    };

    $scope.actualizarAula = function () {
        if ($scope.validar())
        {
        $http.put("http://localhost:3333/api/actualizarAula", $scope.aula).success(function (respuesta) {
            tblAulas.listaAulas = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: respuesta});
            sweetAlert("Exito", "Registro actualizado", "success");
//            console.log(respuesta);
//            $scope.aula = respuesta;
              $scope.mostrarBoton = true;
              $scope.CancelarAula();
        });
    }
    };

    $scope.eliminarAula = function (id) {
//        var ok = $scope.validar();
//        if (ok == true) {
        $scope.aula.idaula = id;
        //alert("va a entrar a eliminar");
        $http.put("http://localhost:3333/api/eliminarAula", $scope.aula).success(function (respuesta) {
            tblAulas.listaAulas = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: respuesta});
            sweetAlert("Exito", "Registro Dado De Baja", "success");
            console.log(respuesta);
        });
//        }
    };
    
    $scope.activarAula = function (id) {
        $scope.aula.idaula = id;
//        alert("va a entrar a activar el estado");
        $http.put("http://localhost:3333/api/activarAula", $scope.aula).success(function (respuesta) {
             tblAulas.listaAulas  = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: respuesta});
            sweetAlert("Exito", "Registro Dado De Alta", "success");
            console.log(respuesta);     
        });
    };


$scope.dameHorarios();



});
