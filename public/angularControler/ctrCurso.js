app.controller('ctrCurso', function ($scope, $http) {

    $scope.curso = {};
    $scope.curso.nombre = "";
       $http.get("http://localhost:3333/api/curso").success(function (data) {
        $scope.listaCursos = data;
    });

    $scope.validar = function () {
        var ok = false;
        if ($scope.curso.nombre == "") {
            sweetAlert("Oops...", "Se requiere un nombre", "warning");
        } else {
            ok = true;
        }
    };


    $scope.guardarCursos = function () {
        $http.post("http://localhost:3333/api/guardarCursos", $scope.curso).success(function (respuesta) {
            console.log(respuesta);
            if (respuesta.idRespuesta == 1) {
                alert("Nuevo Cursos");

                $scope.listaCursos = respuesta;
            }
        });
    };


});
