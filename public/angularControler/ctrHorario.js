app.controller('ctrHorario', function ($scope, $http, NgTableParams) {

    $scope.horario = {};
    $scope.horario.idhorario = "";
    $scope.horario.dia = "";
    $scope.horario.horaInicio = "";
    $scope.horario.horaFinal = "";



    var tblHorarios = this;
    $http.get("http://localhost:3333/api/horarios").success(function (data) {
        tblHorarios.listaHorarios = new NgTableParams({count: 4}, {counts: [25, 50, 100], dataset: data});
    });


    $scope.validar = function () {
        var ok = false;
        if ($scope.horario.dia == "") {
            sweetAlert("Oops...", "Se requiere un nombre", "warning");
        } else if ($scope.horario.horaInicio == "") {
            sweetAlert("Oops...", "Se requiere un apellido", "warning");
        } else if ($scope.horario.horaFinal == "") {
            sweetAlert("Oops...", "Se requiere un telefono", "warning");
        }
        return ok;
    };


        $scope.guardarHorario = function () {
        alert("va a entrar a guardar");
        $http.post("http://localhost:3333/api/guardarHorario", $scope.horario).success(function (respuesta) {
            tblHorarios.listaHorarios = new NgTableParams({count: 4}, {counts: [25, 50, 100], dataset: respuesta});
        });
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
            tblHorarios.listaHorarios = new NgTableParams({count: 4}, {counts: [25, 50, 100], dataset: respuesta});
            console.log(respuesta);
        });
    };

    $scope.eliminarHorario = function (id) {
//        var ok = $scope.validar();
//        if (ok == true) {
        $scope.horario.idhorario= id;
        alert("va a entrar a actualizar");
        $http.put("http://localhost:3333/api/eliminarHorario", $scope.horario).success(function (respuesta) {
            console.log(respuesta);
        });
//        }
    };






});
