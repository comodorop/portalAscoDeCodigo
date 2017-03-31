app.controller('ctrAlumno ', function ($scope, $http, NgTableParams) {

    $scope.alumno  = {};
    $scope.alumno .idalumno  = "";
    $scope.alumno .idcliente  = ""; 
    $scope.alumno .idaula = "";
    $scope.alumno .escuela = "";


//    $scope.mostrarBoton = false;
//    $scope.ocultarBoton = false;
//    $scope.activarBtnGuardar = false;

    $scope.CancelarAlumno = function () {

        $scope.horario.idalumno  = "";
        $scope.horario.idcliente  = "";      
        $scope.horario.idaula = "";
        $scope.horario.escuela = "";
    };

    $scope.dameClientes = function () {
        $http.get("http://localhost:3333/api/clientes").success(function (respuesta) {
            console.log(respuesta);
            $scope.listaClientes = respuesta;
        });
    };
    
      //dameAula
    $scope.dameAulas = function (){
        $http.get("http://localhost:3333/api/aulas").success(function (respuesta) {
        console.log(respuesta);
        $scope.listaAulas = respuesta;   
        });
    };
   
    
//    $scope.dameCursos = function () {
//        $http.get("http://localhost:3333/api/cursos").success(function (respuesta) {
//            console.log(respuesta);
//            $scope.listaCursos = respuesta;
//        });
//    };

    var tblAlumnos = this;
    $http.get("http://localhost:3333/api/alumnos").success(function (data) {
        tblAlumnos.listaAlumnos = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: data});
    });

//    $scope.validarBaja = function ()
//    {
//        if ($scope.horario.idhorario === "")
//        {
//            sweetAlert("Exito!", "El registro de baja.", "success");
//
//        }
//    };
//
//
//    $scope.validar = function ()
//    {
//        var ok = false;
//        if ($scope.horario.valorCmb === "")
//        {
//            sweetAlert("Error...", "¡Ingrese Día!", "error");
//
//        } else
//        if ($scope.horario.idcurso === "")
//        {
//            sweetAlert("Error...", "¡Ingrese Curso!", "error");
//
//        } else
//        if ($scope.horario.horaInicio === "")
//        {
//            sweetAlert("Error...", "¡Ingrese Hora de Inicio!", "error");
//
//        } else
//        if ($scope.horario.horaFinal === "")
//        {
//            sweetAlert("Error...", "¡Ingrese Hora Final!", "error");
//
//        } else
//        if ($scope.horario.precio === "")
//        {
//            sweetAlert("Error...", "¡Ingrese Precio!", "error");
//
//        } else
//        {
//            ok = true;
//        }
//        return ok;
//
//    };

    $scope.guardarAlumno = function () {
//        if ($scope.validar())
//        {
            // alert("va a entrar a guardar");
            $http.post("http://localhost:3333/api/guardarAlumno", $scope.alumno).success(function (respuesta) {
                tblAlumnos.listaAlumnos = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: respuesta});
                sweetAlert("Exito", "Nuevo registro disponible", "success");
                $scope.CancelarAlumno();
                $scope.ocultarBoton = true;
//                  console.log(respuesta);
            });
//        }
    };

    $scope.obtenerAlumno = function (id) {

        $scope.alumno.idalumno = id;
        $http.post("http://localhost:3333/api/obtenerAlumno", $scope.alumno).success(function (respuesta) {

            console.log(respuesta);
            $scope.alumno = respuesta;
            $scope.mostrarBoton = true;
            $scope.ocultarBoton = true;
        });
//        }
    };

    $scope.actualizarAlumno = function () {
//        if ($scope.validar())
//        {
            $http.put("http://localhost:3333/api/actualizarAlumno", $scope.alumno).success(function (respuesta) {
                tblAlumnos.listaAlumnos = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: respuesta});
                sweetAlert("Exito", "Registro actualizado", "success");
//             console.log(respuesta);
//           $scope.alumno = respuesta;
                $scope.mostrarBoton = true;
                $scope.CancelarAlumno();
            });
//        }
    };

    $scope.eliminarAlumno = function (id) {
//        var ok = $scope.validar();
//        if (ok == true) {
        $scope.alumno.idalumno = id;
        //alert("va a entrar a actualizar");
        $http.put("http://localhost:3333/api/eliminarAlumno", $scope.alumno).success(function (respuesta) {
            tblAlumnos.listaAlumnos = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: respuesta});
            sweetAlert("Exito", "Registro Dado De Baja", "success");
            console.log(respuesta);

        });
//        }
    };

    $scope.activarAlumno = function (id) {
        $scope.alumno.idalumno = id;
//        alert("va a entrar a activar el estado");
        $http.put("http://localhost:3333/api/activarAlumno", $scope.alumno).success(function (respuesta) {
            tblAlumnos.listaAlumnos = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: respuesta});
            sweetAlert("Exito", "Registro Dado De Alta", "success");
            console.log(respuesta);
        });
    };
    
    $scope.dameClientes();
    $scope.dameAulas();

});

