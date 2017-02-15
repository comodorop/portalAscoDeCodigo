app.controller('ctrHorario', function ($scope, $http, NgTableParams) {

    $scope.horario = {};
    $scope.horario.dia = "";
    $scope.horario.horaInicio = "";
    $scope.horario.horaFinal = "";
//    alert("click");


    var tblhorarios = this;
    $http.get("http://localhost:3333/api/horarios").success(function (data) {
        tblhorarios.listaHorarios = new NgTableParams({count:4}, {counts: [25, 50, 100], dataset: data});
        console.log(data);
        $scope.listaHorarios = data;
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
//        var ok = $scope.validar();
//        if (ok == true) {
//            alert("va a entrar a guardar");
            $http.post("http://localhost:3333/api/guardarHorario", $scope.horario).success(function (respuesta) {
                console.log(respuesta);
            });
//        }
    };
//    $scope.actualizarHorario = function () {
////        var ok = $scope.validar();
////        if (ok == true) {
//            alert("va a entrar a actualizar");
//            $http.put("http://localhost:3333/api/actualizarHorario", $scope.horario).success(function (respuesta) {
//                console.log(respuesta);
//            });
////        }
//    };
    
//     $scope.eliminarHorario = function () {
////        var ok = $scope.validar();
////        if (ok == true) {
//            alert("va a entrar a actualizar");
//            $http.delete("http://localhost:3333/api/eliminarHorario", $scope.horario).success(function (respuesta) {
//                console.log(respuesta);
//            });
////        }
//    };






});



