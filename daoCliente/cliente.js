'use strict'
var con = require('../daoConeccion/Connection');

function dameClientes(callback) {
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

function guardarClientes(cliente, callback) {
   // console.log("informacion para guardar");
    //console.log(cliente);
    var connection = con.conecction();
    var sql = "INSERT INTO cliente (nombre, apellido, correo, telefono, estado) \n\
               VALUES ('" + cliente.nombre + "', '" + cliente.apellido + "', '" + cliente.correo + "', '" + cliente.telefono + "' ,'1' )";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
}

function obtenerCliente(cliente, callback){
    //console.log("informacion para guardar");
    //console.log(cliente);
    var connection = con.conecction();
    var sql = "SELECT * FROM  cliente WHERE idcliente = '"+cliente.idcliente+"'";
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



function actualizarClientes(cliente, callback) {
    //console.log("informacion para actualizar");
    //console.log(cliente);
    var connection = con.conecction();
    var sql = "UPDATE cliente SET  nombre='" + cliente.nombre + "', apellido='" + cliente.apellido + "', correo='" + cliente.correo + "', telefono='" + cliente.telefono + "' WHERE idcliente='" + cliente.idcliente + "'";
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

function eliminarClientes(cliente, callback) {
    //console.log("informacion para eliminar");
    //console.log(cliente);
    var connection = con.conecction();
    
    var sql = "UPDATE cliente  set estado = '2'  WHERE idcliente='" + cliente.idcliente + "'";
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
    dameClientes,
    obtenerCliente,
    guardarClientes,
    actualizarClientes,
    eliminarClientes
};
