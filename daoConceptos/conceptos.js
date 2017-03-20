'use strict'
var con = require('../daoConeccion/Connection');

function dameConceptos(callback) {
    var connection = con.conecction();
    var sql = "SELECT * from concepto";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, result);
        }
    });
}

module.exports = {
    dameConceptos
    
};

