'use strict'
var con = require('../daoConeccion/Connection');

function dameAlumnos(callback) {
    var connection = con.conecction();
//   var sql = "SELECT c.idalumno,c.idcliente,c.idaula,c.escuela,e.estado as estado from alumno c inner join estado e on c.estado=e.idestado";
//    var sql = "SELECT c.idalumno,c.idcliente,c.idaula,c.escuela, e.estado as estado, aula from pago c inner join estado e on c.estado=e.idestado inner join cliente h on c.idcliente=h.idcliente inner join aula h on a.idaula=u.idaula";
    var sql = "select * from alumno";
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
    //console.log(cliente);
    var connection = con.conecction();

    var sql = "UPDATE alumno  set estado = '2'  WHERE idalumno='" + alumno.idalumno + "'";
    //console.log(sql)
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


