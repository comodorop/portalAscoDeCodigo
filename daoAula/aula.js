'use strict'
var con = require('../daoConeccion/Connection');

function dameAulas(callback) {
    var connection = con.conecction();
    var sql = "SELECT c.idcliente,c.nombre,c.apellido,c.correo,c.telefono,e.estado as estado from cliente c inner join estado e on c.estado=e.idestado";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, result);
        }
    });
}

function guardarAulas(aula, callback) {
   // console.log("informacion para guardar");
    //console.log(cliente);
    var connection = con.conecction();
    var sql = "INSERT INTO aula (idhorario, fechaInicio, fechaFinal, estado) \n\
               VALUES ('" + aula.idhorario + "', '" + aula.fechaInicio + "', '" + aula.fechaFinal + "','1' )";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
}

function obtenerAula(aula, callback){
    //console.log("informacion para guardar");
    //console.log(cliente);
    var connection = con.conecction();
    var sql = "SELECT * FROM  aula WHERE idaula = '"+aula.idaula+"'";
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



function actualizarAulas(aula, callback) {
    //console.log("informacion para actualizar");
    //console.log(cliente);
    var connection = con.conecction();
    var sql = "UPDATE aula SET  fechaInicio='" + aula.fechaInicio + "', fechaFinal='" + aula.fechaFinal + "' WHERE idaula='" + aula.idaula + "'";
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

function eliminarAulas(aula, callback) {
    //console.log("informacion para eliminar");
    //console.log(cliente);
    var connection = con.conecction();
    
    var sql = "UPDATE aula  set estado = '2'  WHERE idaula='" + aula.idaula + "'";
    //console.log(sql)
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
