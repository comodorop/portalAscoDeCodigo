'use strict'
var con = require('../daoConeccion/Connection');

function dameHistoriales(callback) {
    var connection = con.conecction();
    var sql = "SELECT c.idhistorial,c.idpago,c.abono,c.saldo,e.estado as estado from historial c inner join estado e on c.estado=e.idestado";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, result);
        }
    });
}

function guardarHistoriales(historial, callback) {
    var connection = con.conecction();
    var sql = "INSERT INTO historial (idpago, abono, saldo, estado) \n\
               VALUES ('" + historial.idpago + "', '" + historial.abono + "', '" + historial.saldo + "', '1' )";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, 1);
        }
    });
}

//function obtenerHistorial(historial, callback){
//    //console.log("informacion para guardar");
//    //console.log(historial);
//    var connection = con.conecction();
//    var sql = "SELECT * FROM  historial WHERE idhistorial = '"+historial.idhistorial+"'";
//    //console.log("la consulta es ");
//    //console.log(sql);
//    connection.query(sql, function (err, result) {
//        if (err) {
//            throw  err;
//        } else {
//            callback(null, result);
//        }
//    });
//}
//
//
//
//function actualizarHistoriales(historial, callback) {
//    //console.log("informacion para actualizar");
//    //console.log(cliente);
//    var connection = con.conecction();
//    var sql = "UPDATE historial SET  idpago='" + historial.idpago + "', abono='" + historial.abono + "', saldo='" + historial.saldo + "' WHERE idhistorial='" + historial.idhistorial+ "'";
//    //console.log("**************");
//    //console.log(sql);
//    connection.query(sql, function (err, result) {
//        if (err) {
//            throw  err;
//        } else {
//            callback(null, 1);
//        }
//    });
//}
//
//function eliminarHistoriales(historial, callback) {
//    //console.log("informacion para eliminar");
//    //console.log(cliente);
//    var connection = con.conecction();
//    
//    var sql = "UPDATE historial  set estado = '2'  WHERE idhistorial='" + historial.idhistorial+ "'";
//    //console.log(sql)
//    connection.query(sql, function (err, result) {
//        if (err) {
//            throw  err;
//        } else {
//            callback(null, 1);
//        }
//    });
//}
//
//function activarHistoriales(historial, callback) {
//    //console.log("informacion para eliminar");
//    //console.log(historial);
//    var connection = con.conecction();
//    
//    var sql = "UPDATE historial  set estado = '1'  WHERE idhistorial='" + historial.idhistorial+ "'";
//    //console.log(sql)
//    connection.query(sql, function (err, result) {
//        if (err) {
//            throw  err;
//        } else {
//            callback(null, 1);
//        }
//    });
//}

module.exports = {
    dameHistoriales,
//    obtenerHistorial,
    guardarHistoriales,
//    actualizarHistoriales,
//    eliminarHistoriales,
//    activarHistoriales
};


function operaciones(op)
{

    var ops = {
        
        restar: function restarNumeros(n1, n2) {
            return (parseInt(n1) - parseInt(n2));
        }


    };

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    
    //Comprobamos si se ha introducido números en las cajas
    if (isNaN(parseFloat(document.getElementById('num1').value))) {
        alert("Indique un número en 'numero1'");
        document.getElementById("num1").innerText = "0";
        document.getElementById("num1").focus();
        } else if (isNaN(parseFloat(document.getElementById('num2').value))) {
        alert("Indique un número en 'numero2'");
        document.getElementById("num2").innerText = "0";
        document.getElementById("num2").focus();
    }
    else {
    //Si se han introducido los números en ámbas cajas, operamos:
        switch(op) {
            case 'restar':
                var resultado = ops.restar(num1, num2);
                alert (resultado);
                break;
 
        }
    }

}

