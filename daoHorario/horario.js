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
    var sql = "INSERT INTO cliente (nombre, apellido, correo, telefono) \n\
               VALUES ('" + cliente.nombre + "', '" + cliente.apellido + "', '" + cliente.correo + "', '" + cliente.telefono + "' )";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
}

function actualizarClientes(cliente, callback) {
    console.log("informacion para actualizar");
    console.log(cliente);
    var connection = con.conecction();
    var sql = "UPDATE cliente SET  nombre='" + cliente.nombre + "', apellido'" + cliente.apellido + "', correo '" + cliente.correo + "', telefono '" + cliente.telefono + "' WHERE idcliente='" + cliente.idCliente + "'";
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
    var sql = "DELETE FROM cliente WHERE idcliente='" + cliente.idCliente + "'";

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
    guardarClientes,
    actualizarClientes,
    eliminarClientes
};



