'use strict'
var con = require('../daoConeccion/Connection');

function dameHorarios(callback) {
    var connection = con.conecction();
    var sql = "SELECT * from horario";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, result);
        }
    });
}

function guardarHorarios(horario, callback) {
    console.log("informacion para guardar");
    console.log(horario);
    var connection = con.conecction();
    var sql = "INSERT INTO horario (dia, horaInicio, horaFinal) \n\
               VALUES ('" + horario.dia + "', '" + horario.horaInicio + "', '" + horario.horaFinal + "')";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
}

function actualizarHorarios(horario, callback) {
    console.log("informacion para actualizar");
    console.log(horario);
    var connection = con.conecction();
    var sql = "UPDATE horario SET  dia='" + horario.dia + "', horaInicio'" + horario.horaInicio + "', horaFinal '" + horario.horaFinal + "' WHERE idhorario='" + horario.idhorario + "'";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
}

function eliminarHorarios(horario, callback) {
    console.log("informacion para eliminar");
    console.log(horario);
    var connection = con.conecction();
    var sql = "DELETE FROM horario WHERE idhorario='" + horario.idhorario + "'";

    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
}

module.exports = {
    dameHorarios,
    guardarHorarios,
    actualizarHorarios,
    eliminarHorarios
};



