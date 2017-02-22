'use strict'
var con = require('../daoConeccion/Connection');

function dameAula(callback) {
    var connection = con.conecction();
    var sql = "SELECT * from aula";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, result);
        }
    });
}

function guardarAula(aula, callback) {
    console.log("informacion para guardar");
    console.log(aula);
    var connection = con.conecction();
    var sql = "INSERT INTO aula (idhorario, fechaInicio, fechaFinal, estado) \n\
               VALUES ('" + aula.idhorario + "', '" + aula.fechaInicio + "', '" + aula.fechaFinal + "', '1' )";
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



function actualizarAula(aula, callback) {
    console.log("informacion para actualizar");
    console.log(aula);
    var connection = con.conecction();
    var sql = "UPDATE aula SET  idhorario='" + aula.idhorario + "', fechaInicio='" + aula.fechaInicio + "', fechaFinal='" + aula.fechaFinal + "', estado='" + aula.estado + "' WHERE idaula='" + aula.idaula + "'";
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

function bajaAula(aula, callback) {
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
    dameAula,
    obtenerAula,
    guardarAula,
    actualizarAula,
    bajaAula
};
