app.controller('ctrHorario', function ($scope, $http, NgTableParams) {

    $scope.horario = {};
    $scope.horario.idhorario = "";
    $scope.horario.dia = "";
    $scope.horario.horaInicio = "";
    $scope.horario.horaFinal = "";
    $scope.guardarHorario = function () {


        if ($scope.validar())
        {
            sweetAlert("Correcto", "¡Información enviada!", "success");
        }


    };
    $scope.dameDias = function () {
        $http.get("http://localhost:3333/api/dias").success(function (respuesta) {
            console.log(respuesta);
            $scope.lstDias = respuesta;
            
        });
    };

    var tblHorarios = this;
    $http.get("http://localhost:3333/api/horarios").success(function (data) {
        tblHorarios.listaHorarios = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: data});
    });


//    $scope.validar = function ()
//    {
//
//        if ($scope.horario.dia === "")
//        {
//            sweetAlert("Error...", "¡Ingrese El Día!", "error");
//            return false;
//        } else
//        if ($scope.horario.horaInicio === "")
//        {
//            sweetAlert("Error...", "¡Ingrese La Hora de Inicio!", "error");
//            return false;
//        } else
//        if ($scope.horario.horaFinal === "")
//        {
//            sweetAlert("Error...", "¡Ingrese La Hora Final!", "error");
//            return false;
//        } else
//        {
//            return true;
//        }
//
//
//    };

    $scope.validar = function ()
    {

        if ($scope.horario.horaInicio === "")
        {
            sweetAlert("Error...", "¡Ingrese La Hora de Inicio!", "error");
            return false;
        } else
        if ($scope.horario.horaFinal === "")
        {
            sweetAlert("Error...", "¡Ingrese La Hora Final!", "error");
            return false;
        } else
        {
            return true;
        }


    };


    $scope.guardarHorario = function () {
        if ($scope.validar())
        {
            // alert("va a entrar a guardar");
            $http.post("http://localhost:3333/api/guardarHorario", $scope.horario).success(function (respuesta) {
                tblHorarios.listaHorarios = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: respuesta});
            });
        } else
        {
            alert("ocurrió un error");
        }
    };

    $scope.obtenerHorario = function (id) {

        $scope.horario.idhorario = id;
        $http.post("http://localhost:3333/api/obtenerHorario", $scope.horario).success(function (respuesta) {

            console.log(respuesta);
            $scope.horario = respuesta;
        });
//        }
    };

    $scope.actualizarHorario = function () {
        $http.put("http://localhost:3333/api/actualizarHorario", $scope.horario).success(function (respuesta) {
            tblHorarios.listaHorarios = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: respuesta});
            console.log(respuesta);
        });
    };

    $scope.eliminarHorario = function (id) {
//        var ok = $scope.validar();
//        if (ok == true) {
        $scope.horario.idhorario = id;
        //alert("va a entrar a actualizar");
        $http.put("http://localhost:3333/api/eliminarHorario", $scope.horario).success(function (respuesta) {
            tblHorarios.listaHorarios = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: respuesta});
            console.log(respuesta);
        });
//        }
    };



$scope.dameDias();


});
