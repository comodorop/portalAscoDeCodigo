'use strict'
var con = require('../daoConeccion/Connection');

function dameEgresos(callback) {
    var connection = con.conecction();
    var sql = "SELECT c.idegreso,c.idabono,c.idcliente,c.concepto,c.descripcion,c.total,c.fecha,e.estado as estado from egreso c inner join estado e on c.estado=e.idestado";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, result);
        }
    });
}

function guardarEgresos(egreso, callback) {
   // console.log("informacion para guardar");
    //console.log(cliente);
    var connection = con.conecction();
    var sql = "INSERT INTO egreso (idabono,idcliente,concepto,descripcion,total,fecha,estado) \n\
               VALUES ('" + egreso.idabono + "', '" + egreso.idcliente + "', '" + egreso.concepto + "', '" + egreso.descripcion + "' ,'" + egreso.total + "', '" + egreso.fecha + "', '1' )";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
}

function obtenerEgreso (egreso, callback){
    //console.log("informacion para guardar");
    //console.log(cliente);
    var connection = con.conecction();
    var sql = "SELECT * FROM  egreso WHERE idegreso = '"+egreso.idegreso+"'";
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



function actualizarEgresos(egreso, callback) {
    //console.log("informacion para actualizar");
    //console.log(cliente);
    var connection = con.conecction();
    var sql = "UPDATE egreso SET  idabono='" + egreso.idabono + "', idcliente='" + egreso.idcliente + "', concepto='" + egreso.concepto + "', descripcion='" + egreso.descripcion + "', total='" + egreso.total + "', , fecha='" + egreso.fecha + "'  WHERE idegreso='" + egreso.idegreso + "'";
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

function eliminarEgresos(egreso, callback) {
    //console.log("informacion para eliminar");
    //console.log(cliente);
    var connection = con.conecction();
    
    var sql = "UPDATE egreso  set estado = '2'  WHERE idegreso='" + egreso.idegreso + "'";
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
    dameEgresos,
    obtenerEgreso,
    guardarEgresos,
    actualizarEgresos,
    eliminarEgresos
};
