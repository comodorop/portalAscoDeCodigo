'use strict'
var con = require('../daoConeccion/Connection');

function dameAulas(callback) {
    var connection = con.conecction();
    var sql = "SELECT c.idaula,c.idhorario,c.fechaInicio,c.fechaFinal, e.estado as estado, h.dia from aula c inner join estado e on c.estado=e.idestado inner join horario h on c.idhorario=h.idhorario";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, result);
        }
    });
}

function guardarAulas(aula, callback) {
    console.log("informacion para guardar");
    console.log(aula);
    var connection = con.conecction();
    var sql = "INSERT INTO aula (idhorario, fechaInicio, fechaFinal, estado) \n\
               VALUES ('" + aula.idhorario +"', '" + aula.fechaInicio + "', '" + aula.fechaFinal + "','1' )";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
}

function obtenerAula(aula, callback){
    console.log("informacion para guardar");
    console.log(aula);
    var connection = con.conecction();
    var sql = "SELECT * FROM  aula WHERE idaula = '"+aula.idaula+"'";
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



function actualizarAulas(aula, callback) {
    console.log("informacion para actualizar");
    console.log(aula);
    var connection = con.conecction();
    var sql = "UPDATE aula SET  idhorario='" + aula.idhorario + "',fechaInicio='" + aula.fechaInicio + "', fechaFinal='" + aula.fechaFinal + "' WHERE idaula='" + aula.idaula + "'";
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

function eliminarAulas(aula, callback) {
    console.log("informacion para eliminar");
    console.log(aula);
    var connection = con.conecction();
    
    var sql = "UPDATE aula  set estado = '2'  WHERE idaula='" + aula.idaula + "'";
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
    dameAulas,
    obtenerAula,
    guardarAulas,
    actualizarAulas,
    eliminarAulas
};
