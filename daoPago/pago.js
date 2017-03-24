'use strict'
var con = require('../daoConeccion/Connection');

function damePagosCliente(cliente,callback){
    var connection = con.conecction();
    var sql = "SELECT * FROM pago Where idcliente='"+cliente.idCliente+"'";
    connection.query(sql, function (err, result){
       if (err){
           throw err;
       } else{
           callback(null, result);
       }
    });
}



function damePagos(callback){
    var connection = con.conecction();
    var sql = "SELECT c.idpago,c.idcliente,c.concepto,c.total,c.fecha,c.descripcion, e.estado as estado, h.nombre from pago c inner join estado e on c.estado=e.idestado inner join cliente h on c.idcliente=h.idcliente";
    connection.query(sql, function (err, result){
       if (err) {
           throw err;
       }else{
           callback(null, result);
       }
       
    });
}


function guardarPagos(pago, callback) {
    console.log(pago);
    var connection = con.conecction();
    var sql = "INSERT INTO pago (concepto, total, fecha, descripcion, estado) \n\
               VALUES ('" + pago.valorCmboCncept + "', '" + pago.total + "' , '" + pago.fecha + "', '" + pago.descripcion + "','1' )";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
}

function obtenerPago(pago, callback){
    console.log(pago);
    var connection = con.conecction();
    var sql = "SELECT * FROM pago WHERE idpago = '"+pago.idpago+"'";
    console.log("la consulta es");
    console.log(sql);
    connection.query(sql, function (err, result){
        if(err){
         throw err;
        }else{
            callback(null, result);
        }
    });
    
}

function actualizarPagos(pago, callback){
    console.log(pago);
    var connection = con.conecction();
    var sql = "UPDATE pago SET  concepto='" + pago.valorCmboCncept + "', total='" + pago.total + "' , fecha='" + pago.fecha + "', descripcion='" +pago.descripcion +"' WHERE idpago='" + pago.idpago + "'";
    console.log(sql);
    connection.query(sql, function (err, result){
          if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
    
}

function eliminarPagos(pago, callback) {
    console.log("informacion para eliminar");
    console.log(pago);
    var connection = con.conecction();
    
    var sql = "UPDATE pago  set estado = '2'  WHERE idpago='" + pago.idpago + "'";
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
    
    damePagosCliente,
    damePagos,
    guardarPagos,
    obtenerPago,
    actualizarPagos,
    eliminarPagos
};