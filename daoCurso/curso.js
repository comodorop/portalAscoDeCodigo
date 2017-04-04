'use strict'
var con = require('../daoConeccion/Connection');

function dameCursos(callback) {
    var connection = con.conecction();
    var sql = "SELECT c.idcurso,c.nombre,e.estado as estado from curso c inner join estado e on c.estado=e.idestado where e.idestado=1";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, result);
        }
    });
}

function guardarCursos(curso, callback) {
//    console.log("informacion para guardar");
//    console.log(curso);
    var connection = con.conecction();
    var sql = "INSERT INTO curso (nombre, estado) \n\
               VALUES ('" + curso.nombre + "', '1' )";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
}

function obtenerCurso(curso, callback){
//    console.log("informacion para guardar");
//    console.log(curso);
    var connection = con.conecction();
    var sql = "SELECT * FROM  curso WHERE idcurso = '"+curso.idcurso+"'";
//    console.log("la consulta es ");
//    console.log(sql);
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, result);
        }
    });
}



function actualizarCursos(curso, callback) {
//    console.log("informacion para actualizar");
//    console.log(curso);
    var connection = con.conecction();
    var sql = "UPDATE curso SET  nombre='" + curso.nombre + "' WHERE idcurso='" + curso.idcurso + "'";
//    console.log("**************");
//    console.log(sql);
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
}

function eliminarCursos(curso, callback) {
//    console.log("informacion para eliminar");
//    console.log(curso);
    var connection = con.conecction();
    
    var sql = "UPDATE curso  set estado = '2'  WHERE idcurso='" + curso.idcurso + "'";
//    console.log(sql)
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
}

function activarCursos(curso, callback) {
//    console.log("informacion para activarCliente");
    console.log(curso);
    var connection = con.conecction();
    
    var sql = "UPDATE curso  set estado = '1'  WHERE idcurso='" + curso.idcurso + "'";
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
    dameCursos,
    obtenerCurso,
    guardarCursos,
    actualizarCursos,
    eliminarCursos,
    activarCursos
};
