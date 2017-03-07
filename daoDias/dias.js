'use strict'
var con = require('../daoConeccion/Connection');

function dameDias(callback) {
    var connection = con.conecction();
    var sql = "SELECT * from dia";
    connection.query(sql, function (err, result) {
        if (err) {
            throw  err;
        } else {
            callback(null, result);
        }
    });
}

module.exports = {
    dameDias
    
};