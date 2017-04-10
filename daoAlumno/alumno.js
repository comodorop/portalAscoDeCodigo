'use strict'
var con = require('../daoConeccion/Connection');

function dameAlumnos(callback) {
    var connection = con.conecction();
   var sql = "select a.idalumno, a.escuela, c.idcliente, au.idaula, au.nombreaula,c.nombre, e.estado from alumno a inner join aula au on au.idaula=a.idaula inner join cliente c on c.idcliente=a.idcliente inner join estado e on c.estado=e.idestado";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, result);
        }
    });
}

function guardarAlumnos(alumno, callback) {
    //console.log(alumno);
    var connection = con.conecction();
    var sql = "INSERT INTO alumno (idcliente, idaula, escuela, estado) \n\
               VALUES ('" + alumno.idcliente + "', '" + alumno.idaula + "', '" + alumno.escuela + "', '1' )";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
}

function obtenerAlumno(alumno, callback) {
    //console.log("informacion para guardar");
    //console.log(alumno);
    var connection = con.conecction();
    var sql = "SELECT * FROM  alumno WHERE idalumno = '" + alumno.idalumno + "'";
    //console.log("la consulta es ");
    //console.log(sql);
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, result);
        }
    });
}



function actualizarAlumnos(alumno, callback) {
    //console.log("informacion para actualizar");
    //console.log(cliente);
    var connection = con.conecction();
    var sql = "UPDATE alumno SET  idcliente='" + alumno.idcliente + "', idaula='" + alumno.idaula + "', escuela='" + alumno.escuela + "' WHERE idalumno='" + alumno.idalumno + "'";
    //console.log("**************");
    //console.log(sql);
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
}

function eliminarAlumnos(alumno, callback) {
    //console.log("informacion para eliminar");
    console.log(alumno);
    var connection = con.conecction();

    var sql = "UPDATE alumno set estado = '2'  WHERE idalumno='" + alumno.idalumno + "'";
    console.log(sql)
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
}

function activarAlumnos(alumno, callback) {
//    console.log("informacion para activarAlumno");
    console.log(alumno);
    var connection = con.conecction();

    var sql = "UPDATE alumno  set estado = '1'  WHERE idalumno='" + alumno.idalumno + "'";
    console.log(sql)
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
}

module.exports = {
    dameAlumnos,
    obtenerAlumno,
    guardarAlumnos,
    actualizarAlumnos,
    eliminarAlumnos,
    activarAlumnos
};


