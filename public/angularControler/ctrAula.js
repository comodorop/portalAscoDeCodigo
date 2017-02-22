app.controller('ctrAula', function ($scope, $http, NgTableParams) {

    $scope.aula = {};
    $scope.aula.idaula = "";
    $scope.aula.idhorario = "";
    $scope.aula.fechaInicio = "";
    $scope.aula.fechaFinal = "";
    $scope.aula.estado = "";



    var tblAulas = this;
    $http.get("http://localhost:3333/api/aulas").success(function (data) {
        tblAulas.listaAulas = new NgTableParams({count: 4}, {counts: [25, 50, 100], dataset: data});
    });
//
//    $scope.validarEmail = function (mail)
//    {
//        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
//    };
//
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


    $scope.guardarAula = function () {
        alert("va a entrar a guardar");
        $http.post("http://localhost:3333/api/guardarCliente", $scope.aula).success(function (respuesta) {
            tblAulas.listaAulas = new NgTableParams({count: 4}, {counts: [25, 50, 100], dataset: data});
        });
    };

    $scope.obtenerAula = function (id) {

        $scope.aula.idcliente = id;
        $http.post("http://localhost:3333/api/obtenerAula", $scope.aula).success(function (respuesta) {

            console.log(respuesta);
            $scope.aula = respuesta;
        });
//        }
    };

    $scope.actualizarAula = function () {
        $http.put("http://localhost:3333/api/actualizarAula", $scope.aula).success(function (respuesta) {
            tblAulas.listaAulas = new NgTableParams({count: 4}, {counts: [25, 50, 100], dataset: data});
            console.log(respuesta);
        });
    };

    $scope.bajaAula = function (id) {
//        var ok = $scope.validar();
//        if (ok == true) {
        $scope.aula.idcliente = id;
        alert("va a entrar a actualizar");
        $http.put("http://localhost:3333/api/bajaAula", $scope.aula).success(function (respuesta) {
            console.log(respuesta);
        });
//        }
    };






});

