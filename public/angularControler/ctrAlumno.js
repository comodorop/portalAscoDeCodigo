app.controller('ctrAlumno', function ($scope, $http, NgTableParams) {

    $scope.alumno  = {};
    $scope.alumno.idalumno  = "";
    $scope.alumno.idcliente  = ""; 
    $scope.alumno.idaula = "";
    $scope.alumno.escuela = "";


    $scope.mostrarBoton = false;
    $scope.ocultarBoton = false;
    $scope.activarBtnGuardar = false;

    $scope.CancelarAlumno = function () {

        $scope.alumno.idalumno  = "";
        $scope.alumno.idcliente  = "";      
        $scope.alumno.idaula = "";
        $scope.alumno.escuela = "";
    };

    $scope.dameClientesActivo = function () {
        $http.get("http://localhost:3333/api/dameClientesActivo").success(function (respuesta) {
            console.log(respuesta);
            $scope.listaClientes = respuesta;
        });
    };
    
      
    $scope.dameAulasAlumno = function (){
        $http.get("http://localhost:3333/api/dameAulasAlumno").success(function (respuesta) {
        console.log(respuesta);
        $scope.listaAulas = respuesta;   
        });
    };
   
    var tblAlumnos = this;
    $http.get("http://localhost:3333/api/alumnos").success(function (data) {
        tblAlumnos.listaAlumnos = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: data});
    });

    $scope.validarBaja = function ()
    {
        if ($scope.alumno.idalumno === "")
        {
            sweetAlert("Exito!", "El registro de baja.", "success");

        }
    };

    $scope.validar = function () {
        $scope.ok = false;
        if ($scope.cliente.idcliente == "") {
            sweetAlert("Upss", "Se requiere un cliente", "warning");
        } else if ($scope.cliente.idaula == "") {
            sweetAlert("Upss", "Se requiere una aula", "warning");
        } else if ($scope.cliente.escuela == "") {
            sweetAlert("Upss", "Se requiere una escuela", "warning");
        } else {
            $scope.ok = true;
        }
        return $scope.ok;
    };

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
        $scope.alumno.idalumno = id;
        $http.put("http://localhost:3333/api/eliminarAlumno", $scope.alumno).success(function (respuesta) {
            tblAlumnos.listaAlumnos = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: respuesta});
            sweetAlert("Exito", "Registro Dado De Baja", "success");
            console.log(respuesta);

        });
//        }
    };

      $scope.activarAlumno = function (id) {
        $scope.alumno.idalumno = id;
        $http.put("http://localhost:3333/api/activarAlumno", $scope.alumno).success(function (respuesta) {
            tblAlumnos.listaAlumnos  = new NgTableParams({count: 6}, {counts: [25, 50, 100], dataset: respuesta});
            sweetAlert("Exito", "Registro Dado De Alta", "success");
            console.log(respuesta);
          
        });

    };
    
    $scope.dameClientesActivo();
    $scope.dameAulasAlumno();

});

