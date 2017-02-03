'use strict'
var con = require('../daoConeccion/Connection');

function dameAlumnos(callback) {
    var connection = con.conecction();
    var sql = "SELECT * from alumnos";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, result);
        }
    });
}

function guardarAlumnos(alumnos, callback) {
    console.log("informacion para guardar");
    console.log(alumnos);
    var connection = con.conecction();
    var sql = "INSERT INTO alumnos (nombre, telefono, correo, idDia, idHorario) \n\
               VALUES ('" + alumnos.nombre + "', '" + alumnos.telefono + "', '" + alumnos.correo + "', '1', '1')";
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
    guardarAlumnos
};

