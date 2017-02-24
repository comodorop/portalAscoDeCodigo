'use strict'
var con = require('../daoConeccion/Connection');

function dameEgreso(callback) {
    var connection = con.conecction();
    var sql = "SELECT * from egreso";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, result);
        }
    });
}

function guardarEgreso(egreso, callback) {
    console.log("informacion para guardar");
    console.log(egreso);
    var connection = con.conecction();
    var sql = "INSERT INTO egreso (idcliente, estado, concepto, descripcion, total, fecha) \n\
               VALUES ('" + egreso.idcliente + "', '1', '" + egreso.concepto + "', '" + egreso.descripcion + "' , '" + egreso.total + "', '" + egreso.fecha + "')";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
}

function obtenerEgreso(egreso, callback){
    console.log("informacion para guardar");
    console.log(egreso);
    var connection = con.conecction();
    var sql = "SELECT * FROM  egreso WHERE idegreso = '"+egreso.idegreso+"'";
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



function actualizarEgreso(egreso, callback) {
    console.log("informacion para actualizar");
    console.log(egreso);
    var connection = con.conecction();
    var sql = "UPDATE egreso SET  idcliente='" + egreso.idcliente + "', estado='" + egreso.estado + "', concepto='" + egreso.concepto + "', descripcion='" + egreso.descripcion + "',total='" + egreso.total + "', fecha='" + egreso.fecha + "' WHERE idegreso='" + egreso.idegreso + "'";
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

function bajaEgreso(egreso, callback) {
    console.log("informacion para eliminar");
    console.log(egreso);
    var connection = con.conecction();
    
    var sql = "UPDATE egreso  set estado = '2'  WHERE idegreso='" + egreso.idegreso + "'";
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
    dameEgreso,
    obtenerEgreso,
    guardarEgreso,
    actualizarEgreso,
    bajaEgreso
};



