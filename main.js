var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').Server(app);
var socket = require('socket.io')(server);
var cl = require('./daoCliente/cliente');
var cr = require('./daoCurso/curso');
var hr = require('./daoHorario/horario');
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

//////////////pruevas en postman
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

router.post('/obtenerCliente', function (req, res) {
    console.log("entrooooo al api");
    var params = req.body;
    console.log("*********************");
    console.log(params);
    console.log("**********************");
    cl.obtenerCliente(params, function (error, data) {
        console.log(data);
        res.status(200).send(data[0]);
//        cl.dameClientes(function (error, data) {
//            res.status(200).sendStatus (data);
//        });
    });
});

router.put('/actualizarCliente', function (req, res) {
    var params = req.body;
    cl.actualizarClientes(params, function (error, data) {
        if (data == 1) {
            cl.dameClientes(function (error, data) {
                res.status(200).send(data);
            });
        }
    });
});




router.put('/eliminarCliente', function (req, res) {
    var params = req.body;
    console.log(params)
    cl.eliminarClientes(params, function (error, data) {
        if(data == 1){
            cl.dameClientes(function (error, data) {
                res.status(200).send(data);
            });
        }
      
    });
});



/////*** CURSOS***/////

router.get('/cursos', function (req, res) {
    cr.dameCurso(function (error, data) {
        res.status(200).send(data);
    });
});

//////////////pruevas en postman
router.post('/guardarCurso', function (req, res) {
    console.log("entrooooo al api");
    var params = req.body;
    console.log("*********************");
    console.log(params);
    console.log("**********************");
    cr.guardarCurso(params, function (error, data) {
        cr.dameCurso(function (error, data) {
            res.status(200).send(data);
        });
    });
});

router.post('/obtenerCurso', function (req, res) {
    console.log("entrooooo al api");
    var params = req.body;
    console.log("*********************");
    console.log(params);
    console.log("**********************");
    cr.obtenerCurso(params, function (error, data) {
        console.log(data);
        res.status(200).send(data[0]);
//        cl.dameClientes(function (error, data) {
//            res.status(200).sendStatus (data);
//        });
    });
});

router.put('/actualizarCurso', function (req, res) {
    var params = req.body;
    cr.actualizarCurso(params, function (error, data) {
        if (data == 1) {
            cr.dameCurso(function (error, data) {
                res.status(200).send(data);
            });
        }
    });
});




router.put('/bajaCurso', function (req, res) {
    var params = req.body;
    console.log(params)
    cr.bajaCurso(params, function (error, data) {
        if(data == 1){
            cr.dameCurso(function (error, data) {
                res.status(200).send(data);
            });
        }
      
    });
});




/////*** HORARIOS***/////
router.get('/horarios', function (req, res) {
    hr.guardarHorarios(function (error, data) {
        res.status(200).send(data);
    });
});

//////////////pruevas en postman
router.post('/guardarHorario', function (req, res) {
    console.log("entrooooo al api");
    var params = req.body;
    console.log("*********************");
    console.log(params);
    console.log("**********************");
    hr.guardarHorarios(params, function (error, data) {
        hr.dameHorarios(function (error, data) {
            res.status(200).send(data);
        });
    });
});

router.put('/actualizarHorario', function (req, res) {
    var params = req.body;
    hr.actualizarHorarios(params, function (error, data) {
        res.status(500).send(data);
    });
});


router.put('/eliminarHorario', function (req, res) {
    var params = req.body;
    hr.eliminarHorarios(params, function (error, data) {
        res.status(404).send(data);
    });
});


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-width, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow', 'GET,Post,OPTIONS,PUT,DELETE');
    next();
});

app.use('/api', router);
server.listen('3333', function () {
    console.log("Servidor levantado satisfactoriamente");
    console.log("http://localhost:3333/api");
});


