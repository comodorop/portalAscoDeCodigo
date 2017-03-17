'use strict'
var con = require('../daoConeccion/Connection');

function damePagos(callback){
    var connection = con.conecction();
    var sql = "SELECT * from Pago";
    connection.query(sql, function (err, result){
       if (err) {
           throw err;
       }else{
           callback(null, result);
       }
       
    });
}


function guardarPagos(cliente, callback) {
    console.log(pago);
    var connection = con.conecction();
    var sql = "INSERT INTO pago (idcliente, estado, concepto, total, fecha, descripcion, curso,  estado) \n\
               VALUES ('" + pago.idcliente + "', '" + pago.estado + "', '" + pago.concepto + "', '" + pago.total + "' , '" + pago.fecha + "', '" + pago.descripcion + "', '" + pago.curso + "','1' )";
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
    var sql = "SELECT * FROM pago WHERE idpago='" + pago.idpago + "', estado='" + pago.estado + "', concepto='" + pago.concepto + "', total='" + pago.total + "' , fecha='" + pago.fecha + "', descripcion='" +pago.descripcion +"', curso='"+ pago.curso +"' WHERE idpago='" + pago.idpago + "'";
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
    var sql = "UPDATE pago SET pago='" + pago.idcliente + "',   ";
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
    //console.log("informacion para eliminar");
    //console.log(cliente);
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

    damePagos,
    guardarPagos,
    obtenerPago,
    actualizarPagos,
    eliminarPagos
};