'use strict'
var mysql = require('mysql');

function conecction() {
    var connection = mysql.createConnection({
        host: "192.168.3.156",
        user: "root",
        password: "AAHehf83301",
        database: "proyectoestadia",
        port: "3306"
    });
    connection.connect(function (err) {
        if (err) {
            throw  err;
        } else {
            console.log("Conneccion exitosa");
        }
    });
    return connection;
}


module.exports = {
    conecction
};
