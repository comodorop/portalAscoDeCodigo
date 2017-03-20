'use strict'
var con = require('../daoConeccion/Connection');

function dameHorarios(callback) {
    var connection = con.conecction();
    var sql = "SELECT c.idhorario,c.dia,c.precio,c.horaInicio,c.horaFinal,e.estado as estado from horario c inner join estado e on c.estado=e.idestado";
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
    var sql = "INSERT INTO horario (dia, precio, horaInicio, horaFinal, estado) \n\
               VALUES ('" + horario.valorCmb + "','" + horario.precio + "', '" + horario.horaInicio + "', '" + horario.horaFinal + "' ,'1')";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
}

function obtenerHorario(horario, callback){
//    console.log("informacion para guardar");
//    console.log(horario);
    var connection = con.conecction();
    var sql = "SELECT * FROM  horario WHERE idhorario = '"+horario.idhorario+"'";
//    console.log("la consulta es ");
//    console.log(sql);
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, result);
        }
    });
}



function actualizarHorarios(horario, callback) {
//    console.log("informacion para actualizar");
//    console.log(horario);
    var connection = con.conecction();
    var sql = "UPDATE horario SET  dia='" + horario.valorCmb + "', precio='" + horario.precio + "', horaInicio='" + horario.horaInicio + "', horaFinal='" + horario.horaFinal + "' WHERE idhorario='" + horario.idhorario + "'";
//    console.log("**************");
//    console.log(sql);
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
    dameHorarios,
    obtenerHorario,
    guardarHorarios,
    actualizarHorarios,
    eliminarHorarios
};
