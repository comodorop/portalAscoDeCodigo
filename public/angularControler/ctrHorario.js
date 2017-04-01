app.controller('ctrHorario', function ($scope, $http, NgTableParams) {

    $scope.horario = {};
    $scope.horario.idhorario = "";
    $scope.horario.idcurso = "";
    $scope.horario.dia = "";
    $scope.horario.horaInicio = "";
    $scope.horario.horaFinal = "";
    $scope.horario.precio = "";

    $scope.mostrarBoton = false;
    $scope.ocultarBoton = false;
    $scope.activarBtnGuardar = false;

    $scope.CancelarHorario = function () {

        $scope.horario.idhorario = "";
        $scope.horario.idcurso = "";
        $scope.horario.dia = "";
        $scope.horario.horaInicio = "";
        $scope.horario.horaFinal = "";
        $scope.horario.precio = "";

    };
    $scope.dameDias = function () {
        $http.get("http://localhost:3333/api/dias").success(function (respuesta) {
            //  console.log(respuesta);
            $scope.lstDias = respuesta;

        });
    };

    $scope.dameCursos = function () {
        $http.get("http://localhost:3333/api/cursos").success(function (respuesta) {
            console.log(respuesta);
            $scope.listaCursos = respuesta;
        });
    };

    var tblHorarios = this;
    $http.get("http://localhost:3333/api/horarios").success(function (data) {
        tblHorarios.listaHorarios = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: data});
    });

    $scope.validarBaja = function ()
    {
        if ($scope.horario.idhorario === "")
        {
            sweetAlert("Exito!", "El registro de baja.", "success");

        }
    };


    $scope.validar = function ()
    {
        var ok = false;
        if ($scope.horario.valorCmb === "")
        {
            sweetAlert("Upss", "¡Ingrese Día!", "warning");

        } else
        if ($scope.horario.idcurso === "")
        {
            sweetAlert("Upss", "¡Ingrese Curso!", "warning");

        } else
        if ($scope.horario.horaInicio === "")
        {
            sweetAlert("Upss", "¡Ingrese Hora de Inicio!", "warning");

        } else
        if ($scope.horario.horaFinal === "")
        {
            sweetAlert("Upss", "¡Ingrese Hora Final!", "warning");

        } else
        if ($scope.horario.precio === "")
        {
            sweetAlert("Upss", "¡Ingrese Precio!", "warning");

        } else
        {
            ok = true;
        }
        return ok;

    };

    $scope.guardarHorario = function () {
        if ($scope.validar())
        {
            // alert("va a entrar a guardar");
            $http.post("http://localhost:3333/api/guardarHorario", $scope.horario).success(function (respuesta) {
                tblHorarios.listaHorarios = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: respuesta});
                sweetAlert("Exito", "Nuevo registro disponible", "success");
                $scope.CancelarHorario();
                $scope.ocultarBoton = true;
//                  console.log(respuesta);
            });
        }
    };

    $scope.obtenerHorario = function (id) {

        $scope.horario.idhorario = id;
        $http.post("http://localhost:3333/api/obtenerHorario", $scope.horario).success(function (respuesta) {

            console.log(respuesta);
            $scope.horario = respuesta;
            $scope.mostrarBoton = true;
            $scope.ocultarBoton = true;
        });
//        }
    };

    $scope.actualizarHorario = function () {
        if ($scope.validar())
        {
            $http.put("http://localhost:3333/api/actualizarHorario", $scope.horario).success(function (respuesta) {
                tblHorarios.listaHorarios = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: respuesta});
                sweetAlert("Exito", "Registro actualizado", "success");
//             console.log(respuesta);
//           $scope.curso = respuesta;
                $scope.mostrarBoton = true;
                $scope.CancelarHorario();
            });
        }
    };

    $scope.eliminarHorario = function (id) {
//        var ok = $scope.validar();
//        if (ok == true) {
        $scope.horario.idhorario = id;
        //alert("va a entrar a actualizar");
        $http.put("http://localhost:3333/api/eliminarHorario", $scope.horario).success(function (respuesta) {
            tblHorarios.listaHorarios = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: respuesta});
            sweetAlert("Exito", "Registro Dado De Baja", "success");
            console.log(respuesta);

        });
//        }
    };

    $scope.activarHorario = function (id) {
        $scope.horario.idhorario = id;
//        alert("va a entrar a activar el estado");
        $http.put("http://localhost:3333/api/activarHorario", $scope.horario).success(function (respuesta) {
            tblHorarios.listaHorarios = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: respuesta});
            sweetAlert("Exito", "Registro Dado De Alta", "success");
            console.log(respuesta);
        });
    };
    
        $scope.activarHorario = function (id) {
        $scope.horario.idhorario = id;
//        alert("va a entrar a activar el estado");
        $http.put("http://localhost:3333/api/activarHorario", $scope.horario).success(function (respuesta) {
            tblHorarios.listaHorarios = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: respuesta});
            sweetAlert("Exito", "Registro Dado De Alta", "success");
            console.log(respuesta);     
        });
    };



    $scope.dameDias();
    $scope.dameCursos();


});
