app.controller('ctrCurso', function ($scope, $http, NgTableParams) {

    $scope.curso = {};
    $scope.curso.nombre = "";
    
//    alert("click");


    var tblCursos = this;
    $http.get("http://localhost:3333/api/cursos").success(function (data) {
        tblCursos.listaCursos = new NgTableParams({count:4}, {counts: [25, 50, 100], dataset: data});
        console.log(data);
        $scope.listaCursos = data;
    });

//    $scope.validarEmail = function (mail)
//    {
//        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
//    };

//    $scope.validar = function () {
//        var ok = false;
//        if ($scope.curso.nombre == "") {
//            sweetAlert("Oops...", "Se requiere un nombre", "warning");
//        } 
////        else if ($scope.cliente.apellido == "") {
////            sweetAlert("Oops...", "Se requiere un apellido", "warning");
////        } else if ($scope.cliente.correo != "") {
////            if ($scope.validarEmail($scope.cliente.correo) == false) {
////                sweetAlert("Error", "Correo electronico no valido", "warning");
////            }
////        } else if ($scope.cliente.telefono == "") {
////            sweetAlert("Oops...", "Se requiere un telefono", "warning");
////        }
//        return ok;
//    };

    $scope.guardarCurso = function () {
//        var ok = $scope.validar();
//        if (ok == true) {
            alert("va a entrar a guardar");
            $http.post("http://localhost:3333/api/guardarCurso", $scope.curso).success(function (respuesta) {
                console.log(respuesta);
            });
//        }
    };






});
