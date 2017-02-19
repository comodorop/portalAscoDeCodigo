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
    var sql = "UPDATE egreso SET  nombre='" + cliente.nombre + "', apellido='" + cliente.apellido + "', correo='" + cliente.correo + "', telefono='" + cliente.telefono + "' WHERE idcliente='" + cliente.idcliente + "'";
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

function eliminarClientes(cliente, callback) {
    console.log("informacion para eliminar");
    console.log(cliente);
    var connection = con.conecction();
    
    var sql = "UPDATE cliente  set estado = '2'  WHERE idcliente='" + cliente.idcliente + "'";
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
    dameClientes,
    obtenerCliente,
    guardarClientes,
    actualizarClientes,
    eliminarClientes
};



