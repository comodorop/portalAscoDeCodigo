'use strict'
var con = require('../daoConeccion/Connection');

function dameCursos(callback) {
    var connection = con.conecction();
    var sql = "SELECT * from curso";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, result);
        }
    });
}

//function guardarCursos(curso, callback) {
//    console.log("informacion para guardar");
//    console.log(curso);
//    var connection = con.conecction();
//    var sql = "INSERT INTO curso (nombre) \n\
//               VALUES ('" + curso.nombre + "')";
//    connection.query(sql, function (err, result) {
//        if (err) {
//            throw  err;
//        } else {
//            callback(null, 1);
//        }
//    });
//}

//function actualizarCursos(curso, callback) {
//    console.log("informacion para guardar");
//    console.log(curso);
//    var connection = con.conecction();
//    var sql = "UPDATE curso SET  nombre='" + curso.nombre + "' WHERE idcurso='" + curso.idCurso + "'";
//    connection.query(sql, function (err, result) {
//        if (err) {
//            throw  err;
//        } else {
//            callback(null, 1);
//        }
//    });
//}

//function eliminarClientes(cliente, callback) {
//    console.log("informacion para guardar");
//    console.log(cliente);
//    var connection = con.conecction();
//    var sql = "DELETE FROM cliente WHERE idcliente='" + cliente.idCliente + "'";
//
//    connection.query(sql, function (err, result) {
//        if (err) {
//            throw  err;
//        } else {
//            callback(null, 1);
//        }
//    });
//}

module.exports = {
    dameCursos
//    guardarCursos,
//    actualizarCursos
//    eliminarClientes
};
