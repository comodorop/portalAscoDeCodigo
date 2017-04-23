'use strict'
var con = require('../daoConeccion/Connection');

function dameAbonos(abono,callback) {
    console.log(abono);
    var connection = con.conecction();
    var sql = "select * from pago where idpago=''";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, result);
        }
    });
}

//function dameAbonos(callback) {   //original
//    console.log(abono);
//    var connection = con.conecction();
//    var sql = "select * from pago where idpago=''";
//    connection.query(sql, function (err, result) {
//        if (err) {
//            throw  err;
//        } else {
//            callback(null, result);
//        }
//    });
//}

function dameSumaAbonos(pagos,callback) {
    try {
     
    var connection = con.conecction();
    var sql = "select idabono,saldo,sum(abono) AS abono from abono WHERE idpago='"+pagos.idpago+"'";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, result);
        }
    });   
    } catch (e) {
        
    }

}

function guardarAbonos(abono, callback) {
    console.log("informacion para guardar");
    console.log(abono);
    var connection = con.conecction();
    var sql = "INSERT INTO abono (idpago, abono, saldo) \n\
               VALUES ('" + abono.idpago + "', '" + abono.abono + "', '" + abono.saldo + "' )";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
}

function obtenerAbono(abono, callback){
    console.log("informacion para guardar");
    console.log(abono);
    var connection = con.conecction();
    var sql = "SELECT * FROM  abono WHERE idabono = '"+abono.idabono+"'";
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



function actualizarAbonos(abono, callback) {
    console.log("informacion para actualizar");
    console.log(abono);
    var connection = con.conecction();
    var sql = "UPDATE abono SET  idpago='" + abono.idpago + "', abono='" + abono.abono + "', saldo='" + abono.saldo + "' WHERE idabono='" + abono.idabono + "'";
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

function eliminarAbonos(abono, callback) {
    console.log("informacion para eliminar");
    console.log(abono);
    var connection = con.conecction();
    
    var sql = "UPDATE abono  set estado = '2'  WHERE idabono='" + abono.idabono + "'";
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
    dameAbonos,
    dameSumaAbonos,
    obtenerAbono,
    guardarAbonos,
    actualizarAbonos,
    eliminarAbonos
};



