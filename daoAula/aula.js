'use strict'
var con = require('../daoConeccion/Connection');

function dameAulas(callback) {
    var connection = con.conecction();
    var sql = "SELECT a.idaula,a.idhorario,a.nombreaula,a.fechaInicio,a.fechaFinal, e.estado as estado, h.dia,h.precio, c.nombre from aula a inner join estado e on a.estado=e.idestado inner join horario h on a.idhorario=h.idhorario inner join curso c on c.idcurso=h.idcurso";             
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, result);
        }
    });
}

function dameAulasAlumnos(callback) {
    var connection = con.conecction();
    var sql = "SELECT a.idaula,a.idhorario,a.nombreaula,a.fechaInicio,a.fechaFinal, e.estado as estado, h.dia,h.precio, c.nombre from aula a inner join estado e on a.estado=e.idestado inner join horario h on a.idhorario=h.idhorario inner join curso c on c.idcurso=h.idcurso WHERE c.estado = 1";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, result);
        }
    });
}

function guardarAulas(aula, callback) {
//    console.log("informacion para guardar");
//    console.log(aula);
    var connection = con.conecction();
    var sql = "INSERT INTO aula (idhorario, nombreaula, fechaInicio, fechaFinal, estado) \n\
               VALUES ('" + aula.idhorario +"', '" + aula.nombreaula + "', '" + aula.fechaInicio + "', '" + aula.fechaFinal + "','1' )";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
}

function obtenerAula(aula, callback){
//    console.log("informacion para guardar");
//    console.log(aula);
    var connection = con.conecction();
    var sql = "SELECT * FROM  aula WHERE idaula = '"+aula.idaula+"'";
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



function actualizarAulas(aula, callback) {
//    console.log("informacion para actualizar");
//    console.log(aula);
    var connection = con.conecction();
    var sql = "UPDATE aula SET  idhorario='" + aula.idhorario + "',nombreaula='" + aula.nombreaula + "', fechaInicio='" + aula.fechaInicio + "', fechaFinal='" + aula.fechaFinal + "' WHERE idaula='" + aula.idaula + "'";
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

function eliminarAulas(aula, callback) {
//    console.log("informacion para eliminar");
//    console.log(aula);
    var connection = con.conecction();
    
    var sql = "UPDATE aula  set estado = '2'  WHERE idaula='" + aula.idaula + "'";
//    console.log(sql)
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
}

function activarAulas(aula, callback) {
    console.log(aula);
    var connection = con.conecction();
    
    var sql = "UPDATE aula  set estado = '1'  WHERE idaula='" + aula.idaula + "'";
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
    dameAulas,
    dameAulasAlumnos,
    obtenerAula,
    guardarAulas,
    actualizarAulas,
    eliminarAulas,
    activarAulas
};
