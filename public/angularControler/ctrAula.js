app.controller('ctrAula', function ($scope, $http, NgTableParams) {

    $scope.aula = {};
    $scope.aula.idAula = "";
    $scope.aula.idHorario = "";
    $scope.aula.fechaInicio = "";
    $scope.aula.fechaFinal = "";
    $scope.CancelarAula = function () {

        $scope.aula.idAula = "";
        $scope.aula.idHorario = "";
        $scope.aula.fechaInicio = "";
        $scope.aula.fechaFinal = "";

    };

    $scope.dameHorarios = function () {
        $http.get("http://localhost:3333/api/horarios").success(function (respuesta) {
            console.log(respuesta);
            $scope.listaHorarios = respuesta;
        });
    };



//    $scope.guardarAula = function () {
//
//
//        if ($scope.validar())
//        {
//            sweetAlert("Correcto", "¡Información enviada!", "success");
//        }
//    };

    var tblAulas = this;
    $http.get("http://localhost:3333/api/aulas").success(function (data) {
        tblAulas.listaAulas = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: data});
    });

//    $scope.validar = function ()
//    {
//        
//        if ($scope.aula.fechaInicio==="")
//        {
//            sweetAlert("Error...", "¡Ingrese La Fecha de Inicio!", "error");
//            return false;
//        } else
//        if ($scope.aula.fechaFinal === "")
//        {
//            sweetAlert("Error...", "¡Ingrese La Fecha Final!", "error");
//            return false;
//        } else
//        {
//            return true;
//        }
//    };
//    

    $scope.guardarAula = function () {
        //     if( $scope.validar());
        //{
        //alert("va a entrar a guardar");
//        $scope.aula.idDia = $scope.valorCombo;


        console.log($scope.aula);
        $http.post("http://localhost:3333/api/guardarAula", $scope.aula).success(function (respuesta) {
            tblAulas.listaAulas = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: respuesta});
            // sweetAlert("Exito", "Nuevo registro disponible", "success");
            console.log(respuesta);
            $scope.CancelarAula();
        });

        // }
    };

    $scope.obtenerAula = function (id) {

        $scope.aula.idAula = id;
        $http.post("http://localhost:3333/api/obtenerAula", $scope.aula).success(function (respuesta) {

            console.log(respuesta);
            $scope.aula = respuesta;
        });
//        }
    };

    $scope.actualizarAula = function () {
        $http.put("http://localhost:3333/api/actualizarAula", $scope.aula).success(function (respuesta) {
            tblAulas.listaAulas = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: respuesta});
            console.log(respuesta);
            $scope.aula = respuesta;
        });
    };

    $scope.eliminarAula = function (id) {
//        var ok = $scope.validar();
//        if (ok == true) {
        $scope.aula.idAula = id;
        //alert("va a entrar a eliminar");
        $http.put("http://localhost:3333/api/eliminarAula", $scope.aula).success(function (respuesta) {
            tblAulas.listaAulas = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: respuesta});
            console.log(respuesta);
        });
//        }
    };


$scope.dameHorarios();



});
