app.controller('ctrCurso', function ($scope, $http, NgTableParams) {

    $scope.curso = {};
    $scope.curso.idcurso = "";
    $scope.curso.nombre = "";
    $scope.guardarCurso = function () {


        if ($scope.validar())
        {
            sweetAlert("Correcto", "¡Información enviada!", "success");
        }


    };

    var tblCursos = this;
    $http.get("http://localhost:3333/api/cursos").success(function (data) {
        tblCursos.listaCursos = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: data});
    });



    $scope.validar = function ()
    {

        if ($scope.curso.nombre === "")
        {
            sweetAlert("Error...", "¡Ingrese El nombre del Curso!", "error");
            return false;
        } else
        {
            return true;
        }


    };


    $scope.guardarCurso = function () {
        if ($scope.validar())
        {
            //alert("va a entrar a guardar");
            $http.post("http://localhost:3333/api/guardarCurso", $scope.curso).success(function (respuesta) {
                tblCursos.listaCursos = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: respuesta});
            });
        } else
        {
            alert("ocurrió un error");
        }
    };

    $scope.obtenerCurso = function (id) {

        $scope.curso.idcurso = id;
        $http.post("http://localhost:3333/api/obtenerCurso", $scope.curso).success(function (respuesta) {

            console.log(respuesta);
            $scope.curso = respuesta;
        });
//        }
    };

    $scope.actualizarCurso = function () {
        $http.put("http://localhost:3333/api/actualizarCurso", $scope.curso).success(function (respuesta) {
            tblCursos.listaCursos = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: respuesta});
            console.log(respuesta);
        });
    };

    $scope.eliminarCurso = function (id) {
//        var ok = $scope.validar();
//        if (ok == true) {
        $scope.curso.idcurso = id;
       // alert("va a entrar a actualizar");
        $http.put("http://localhost:3333/api/eliminarCurso", $scope.curso).success(function (respuesta) {
            tblCursos.listaCursos = new NgTableParams({count: 10}, {counts: [25, 50, 100], dataset: respuesta});
            console.log(respuesta);
        });
//        }
    };






});
