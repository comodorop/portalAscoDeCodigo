var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').Server(app);
var socket = require('socket.io')(server);
var cl = require('./daoCliente/cliente');
var curso = require('./daoCurso/curso');
app.use(express.static('public'));
var router = express.Router();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/////*** CLIENTES***/////
router.get('/clientes', function (req, res) {
    cl.dameClientes(function (error, data) {
        res.status(200).send(data);
    });
});

router.post('/guardarCliente', function (req, res) {
    console.log("entrooooo al api");
    var params = req.body;
    console.log("*********************");
    console.log(params);
    console.log("**********************");
    cl.guardarClientes(params, function (error, data) {
        cl.dameClientes(function (error, data) {
            res.status(200).send(data);
        });
    });
});

router.put('/actualizarClientes', function (req, res) {
    var params = req.body;
    cl.guardarClientes(params, function (error, data) {
        cl.dameClientes(function (error, data) {
            res.status(200).send(data);
        });
    });
});

/////*** CURSOS***/////

router.get('/Cursos', function (req, res) {
    cl.dameCursos(function (error, data) {
        res.status(200).send(data);
    });
});

router.post('/guardarCursos', function (req, res) {
    var params = req.body;
    cl.guardarCursos(params, function (error, data) {
        cl.dameCursos(function (error, data) {
            res.status(200).send(data);
        });
    });
});

router.put('/actualizarCursos', function (req, res) {
    var params = req.body;
    cl.guardarCursos(params, function (error, data) {
        cl.dameCursos(function (error, data) {
            res.status(200).send(data);
        });
    });
});

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','X-API-KEY, Origin, X-Requested-width, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow', 'GET,Post,OPTIONS,PUT,DELETE');
    next();
});

app.use('/api', router);
server.listen('3333', function () {
    console.log("Servidor levantado satisfactoriamente");
    console.log("http://localhost:3333/api");
});


