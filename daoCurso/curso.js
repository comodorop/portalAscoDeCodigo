'use strict'
var con = require('../daoConeccion/Connection');

function dameCurso(callback) {
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

function guardarCurso(curso, callback) {
    console.log("informacion para guardar");
    console.log(curso);
    var connection = con.conecction();
    var sql = "INSERT INTO curso (nombre, estado) \n\
               VALUES ('" + curso.nombre + "' ,'1')";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
}

function obtenerCurso(curso, callback){
    console.log("informacion para guardar");
    console.log(curso);
    var connection = con.conecction();
    var sql = "SELECT * FROM  curso WHERE idcurso = '"+curso.idcurso+"'";
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



function actualizarCurso(curso, callback) {
    console.log("informacion para actualizar");
    console.log(curso);
    var connection = con.conecction();
    var sql = "UPDATE curso SET  nombre='" + curso.nombre + "'";
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

function bajaCurso(curso, callback) {
    console.log("informacion para eliminar");
    console.log(curso);
    var connection = con.conecction();
    
    var sql = "UPDATE curso  set estado = '2'  WHERE idcurso='" + curso.idcurso + "'";
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
    dameCurso,
    obtenerCurso,
    guardarCurso,
    actualizarCurso,
    bajaCurso
};
