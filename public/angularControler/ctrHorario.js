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

//    $scope.validarEmail = function (mail)
//    {
//        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
//    };

//    $scope.validar = function () {
//        var ok = false;
//        if ($scope.cliente.nombre == "") {
//            sweetAlert("Oops...", "Se requiere un nombre", "warning");
//        } else if ($scope.cliente.apellido == "") {
//            sweetAlert("Oops...", "Se requiere un apellido", "warning");
//        } else if ($scope.cliente.correo != "") {
//            if ($scope.validarEmail($scope.cliente.correo) == false) {
//                sweetAlert("Error", "Correo electronico no valido", "warning");
//            }
//        } else if ($scope.cliente.telefono == "") {
//            sweetAlert("Oops...", "Se requiere un telefono", "warning");
//        }
//        return ok;
//    };


    $scope.guardarHorario = function () {
        alert("va a entrar a guardar");
        $http.post("http://localhost:3333/api/guardarHorario", $scope.horario).success(function (respuesta) {
            tblHorarios.listaHorarios = new NgTableParams({count: 4}, {counts: [25, 50, 100], dataset: data});
        });
    };

    $scope.obtenerHorario = function (id) {

        $scope.cliente.idcliente = id;
        $http.post("http://localhost:3333/api/obtenerHorario", $scope.horario).success(function (respuesta) {

            console.log(respuesta);
            $scope.cliente = respuesta;
        });
//        }
    };

    $scope.actualizarHorario = function () {
        $http.put("http://localhost:3333/api/actualizarHorario", $scope.horario).success(function (respuesta) {
            tblHorarios.listaHorarios = new NgTableParams({count: 4}, {counts: [25, 50, 100], dataset: data});
            console.log(respuesta);
        });
    };

    $scope.bajaHorario = function (id) {
//        var ok = $scope.validar();
//        if (ok == true) {
        $scope.horario.idhorario = id;
        alert("va a entrar a actualizar");
        $http.put("http://localhost:3333/api/bajaHorario", $scope.horario).success(function (respuesta) {
            console.log(respuesta);
        });
//        }
    };






});
