app.controller('ctrCurso', function ($scope, $http, NgTableParams) {

    $scope.curso = {};
    $scope.curso.idcurso = "";
    $scope.curso.nombre = "";
    
  $scope.mostrarBoton = false;
  $scope.ocultarBoton = false;
  $scope.activarBtnGuardar = false;
    
    $scope.CancelarCurso = function () {

        $scope.curso.idcurso = "";
        $scope.curso.nombre = "";
    };

    var tblCursos = this;
    $http.get("http://localhost:3333/api/cursos").success(function (data) {
        tblCursos.listaCursos = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: data});
        console.log(data);
    });


    $scope.validarBaja = function ()
    {
        if ($scope.curso.idcurso === "")
        {
            sweetAlert("Exito!", "El registro de baja.", "success");

        }
    };
    
    
    $scope.validar = function ()
    {
        var ok = false;
        if ($scope.curso.nombre === "")
        {
            sweetAlert("Upss", "¡Ingrese El Nombre del Curso!", "warning");

          } else
        {
            ok = true;
        }
        return ok;

    };



    $scope.guardarCurso = function () {
        if ($scope.validar())
        {
            //alert("va a entrar a guardar");
            $http.post("http://localhost:3333/api/guardarCurso", $scope.curso).success(function (respuesta) {
                tblCursos.listaCursos = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: respuesta});
                sweetAlert("Exito", "Nuevo registro disponible", "success");
                $scope.CancelarCurso();
                $scope.ocultarBoton = true;
            
            });
        }
    };

    $scope.obtenerCurso = function (id) {

        $scope.curso.idcurso = id;
        $http.post("http://localhost:3333/api/obtenerCurso", $scope.curso).success(function (respuesta) {

            //console.log(respuesta);
            $scope.curso = respuesta;
            $scope.mostrarBoton = true;
            $scope.ocultarBoton = true;
 
        });
//        }
    };

    $scope.actualizarCurso = function () {
        if ($scope.validar())
        {
            $http.put("http://localhost:3333/api/actualizarCurso", $scope.curso).success(function (respuesta) {
                tblCursos.listaCursos = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: respuesta});
                sweetAlert("Exito", "Registro actualizado", "success");
                //console.log(respuesta);
//            $scope.curso = respuesta;
            $scope.mostrarBoton = true;
            $scope.CancelarCurso();
            });
        }
    };

    $scope.eliminarCurso = function (id) {
//        var ok = $scope.validar();
//        if (ok == true) {
        $scope.curso.idcurso = id;
       // alert("va a entrar a actualizar");
        $http.put("http://localhost:3333/api/eliminarCurso", $scope.curso).success(function (respuesta) {
            tblCursos.listaCursos = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: respuesta});
          console.log(respuesta);
          sweetAlert("Exito", "Registro Dado De Baja", "success");
        });
//        }
    };

    $scope.activarCurso = function (id) {
        $scope.curso.idcurso = id;
//        alert("va a entrar a activar el estado");
        $http.put("http://localhost:3333/api/activarCurso", $scope.curso).success(function (respuesta) {
            tblCursos.listaCursos = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: respuesta});
            sweetAlert("Exito", "Registro Dado De Alta", "success");
            console.log(respuesta);
          
        });

    };






});
