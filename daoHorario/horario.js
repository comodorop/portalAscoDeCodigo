'use strict'
var con = require('../daoConeccion/Connection');

function dameHorario(callback) {
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

function guardarHorario(horario, callback) {
    console.log("informacion para guardar");
    console.log(horario);
    var connection = con.conecction();
    var sql = "INSERT INTO horario (dia, horaInicio, horaFinal) \n\
               VALUES ('" + horario.dia + "', '" + horario.horaInicio + "', '" + horario.horaFinal + "' )";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
}

function obtenerHorario(horario, callback){
    console.log("informacion para guardar");
    console.log(horario);
    var connection = con.conecction();
    var sql = "SELECT * FROM  horario WHERE idhorario = '"+horario.idhorario+"'";
    console.log("la consulta es ");
    console.log(sql);
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, result);
        }
    });
}



function actualizarHorario(horario, callback) {
    console.log("informacion para actualizar");
    console.log(horario);
    var connection = con.conecction();
    var sql = "UPDATE horario SET  dia='" + horario.dia + "', horaInicio='" + horario.horaInicio + "', horaFinal='" + horario.horaFinal + "' WHERE idhorario='" + horario.idhorario+ "'";
    console.log("**************");
    console.log(sql);
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
}

function bajaHorario(horario, callback) {
    console.log("informacion para eliminar");
    console.log(horario);
    var connection = con.conecction();
    
    var sql = "UPDATE horario  set estado = '2'  WHERE idhorario='" + horario.idhorario + "'";
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
    dameHorario,
    obtenerHorario,
    guardarHorario,
    actualizarHorario,
    bajaHorario
};
