var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').Server(app);
var socket = require('socket.io')(server);

var alumnos = require('./daoClientes/cliente');
app.use(express.static('public'));
var router = express.Router();



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


router.get('/Clientes', function (req, res) {
    cliente.dameClientes(function (error, data) {
        res.status(200).send(data);
    });
});

router.post('/guardarClientes', function (req, res) {
    var params = req.body;
    cliente.guardarClientes(params, function (error, data) {
        cliente.dameClientes(function (error, data) {
            res.status(200).send(data);
        });
    });
});

router.put('/actualizarClientes', function (req, res) {
    var params = req.body;
    cliente.guardarClientes(params, function (error, data) {
        cliente.dameClientes(function (error, data) {
            res.status(200).send(data);
        });
    });
});

router.delete('/deleteClientes', function (req, res) {
    var params = req.body;
    cliente.guardarClientes(params, function (error, data) {
        cliente.dameClientes(function (error, data) {
            res.status(200).send(data);
        });
    });
});



app.use('/api', router);
server.listen('3333', function () {
    console.log("Servidor levantado satisfactoriamente");
    console.log("http://localhost:3333/api");
});


