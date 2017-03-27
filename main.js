var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').Server(app);
var socket = require('socket.io')(server);
var cl = require('./daoCliente/cliente');
var cr = require('./daoCurso/curso');
var hr = require('./daoHorario/horario');
var au = require('./daoAula/aula');
var di = require('./daoDias/dias');
var eg = require('./daoEgreso/egreso');
var pg = require('./daoPago/pago');
var cn = require('./daoConceptos/conceptos');
app.use(express.static('public'));
var router = express.Router();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/////*** Dias***/////
router.get('/dias', function (req, res) {
    di.dameDias(function (error, data) {
        res.status(200).send(data);
    });
});

/////*** CONCEPTOS***/////
router.get('/conceptos', function (req, res) {
    cn.dameConceptos(function (error, data) {
        res.status(200).send(data);
    });
});

/////*** CLIENTES***/////
router.get('/clientes', function (req, res) {
    cl.dameClientes(function (error, data) {
        res.status(200).send(data);
    });
});

//////////////pruevas en postman
router.post('/guardarCliente', function (req, res) {
    var params = req.body;
    cl.guardarClientes(params, function (error, data) {
        setTimeout(function () {
            if (data == 1) {
                cl.dameClientes(function (error, data) {
                    console.log("el dato de los usuarios es ");
                    console.log(data);
                    res.status(200).send(data);
                    socket.emit('messages');
                });
              
            }
         });
    });
});
router.post('/obtenerCliente', function (req, res) {
    //console.log("entrooooo al api");
    var params = req.body;
    //console.log("*********************");
    //console.log(params);
    //console.log("**********************");
    cl.obtenerCliente(params, function (error, data) {
        // console.log(data);
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
    //console.log(params)
    cl.eliminarClientes(params, function (error, data) {
        if (data == 1) {
            cl.dameClientes(function (error, data) {
                res.status(200).send(data);
            });
        }

    });
});
router.put('/activarCliente', function (req, res) {
    var params = req.body;
    //console.log(params)
    cl.activarClientes(params, function (error, data) {
        if (data == 1) {
            cl.dameClientes(function (error, data) {
                res.status(200).send(data);
            });
        }

    });
});
/////*** CURSOS***/////

router.get('/cursos', function (req, res) {
    cr.dameCursos(function (error, data) {
        res.status(200).send(data);
    });
});
//////////////pruevas en postman
router.post('/guardarCurso', function (req, res) {
//    console.log("entrooooo al api");
    var params = req.body;
//    console.log("*********************");
//    console.log(params);
//    console.log("**********************");
    cr.guardarCursos(params, function (error, data) {
        cr.dameCursos(function (error, data) {
            res.status(200).send(data);
        });
    });
});
router.post('/obtenerCurso', function (req, res) {
//    console.log("entrooooo al api");
    var params = req.body;
//    console.log("*********************");
//    console.log(params);
//    console.log("**********************");
    cr.obtenerCurso(params, function (error, data) {
        //     console.log(data);
        res.status(200).send(data[0]);
//        cl.dameClientes(function (error, data) {
//            res.status(200).sendStatus (data);
//        });
    });
});
router.put('/actualizarCurso', function (req, res) {
    var params = req.body;
    cr.actualizarCursos(params, function (error, data) {
        if (data == 1) {
            cr.dameCursos(function (error, data) {
                res.status(200).send(data);
            });
        }
    });
});
router.put('/eliminarCurso', function (req, res) {
    var params = req.body;
    console.log(params)
    cr.eliminarCursos(params, function (error, data) {
        if (data == 1) {
            cr.dameCursos(function (error, data) {
                res.status(200).send(data);
            });
        }

    });
});
/////*** HORARIOS***/////
router.get('/horarios', function (req, res) {
    hr.dameHorarios(function (error, data) {
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
router.post('/obtenerHorario', function (req, res) {
//    console.log("entrooooo al api");
    var params = req.body;
//    console.log("*********************");
//    console.log(params);
//    console.log("**********************");
    hr.obtenerHorario(params, function (error, data) {
//        console.log(data);
        res.status(200).send(data[0]);
//        hr.dameHorarios(function (error, data) {
//            res.status(200).sendStatus (data);
//        });
    });
});
router.put('/actualizarHorario', function (req, res) {
    var params = req.body;
    hr.actualizarHorarios(params, function (error, data) {
        if (data == 1) {
            hr.dameHorarios(function (error, data) {
                res.status(200).send(data);
            });
        }
    });
});
router.put('/eliminarHorario', function (req, res) {
    var params = req.body;
//    console.log(params)
    hr.eliminarHorarios(params, function (error, data) {
        if (data == 1) {
            hr.dameHorarios(function (error, data) {
                res.status(200).send(data);
            });
        }

    });
});
///////*** AULA***/////                                         
router.get('/aulas', function (req, res) {
    au.dameAulas(function (error, data) {
        res.status(200).send(data);
    });
});
//////////////pruevas en postman
router.post('/guardarAula', function (req, res) {
    //   console.log("entrooooo al api");
    var params = req.body;
    // console.log("*********************");
    //console.log(params);
    //console.log("**********************");
    au.guardarAulas(params, function (error, data) {
        au.dameAulas(function (error, data) {
            res.status(200).send(data);
        });
    });
});
router.post('/obtenerAula', function (req, res) {
    //console.log("entrooooo al api");
    var params = req.body;
//    console.log("*********************");
//    console.log(params);
//    console.log("**********************");
    au.obtenerAula(params, function (error, data) {
//        console.log(data);
        res.status(200).send(data[0]);
//        au.dameAulas(function (error, data) {
//            res.status(200).sendStatus (data);
//        });
    });
});
router.put('/actualizarAula', function (req, res) {
    var params = req.body;
    au.actualizarAulas(params, function (error, data) {
        if (data == 1) {
            au.dameAulas(function (error, data) {
                res.status(200).send(data);
            });
        }
    });
});
router.put('/eliminarAula', function (req, res) {
    var params = req.body;
//    console.log(params)
    au.eliminarAulas(params, function (error, data) {
        if (data == 1) {
            au.dameAulas(function (error, data) {
                res.status(200).send(data);
            });
        }

    });
});
/////*** EGRESO***/////
router.get('/egresos', function (req, res) {
    eg.dameEgresos(function (error, data) {
        res.status(200).send(data);
    });
});
//////////////pruevas en postman
router.post('/guardarEgreso', function (req, res) {
    //   console.log("entrooooo al api");
    var params = req.body;
    // console.log("*********************");
    //console.log(params);
    //console.log("**********************");
    eg.guardarEgresos(params, function (error, data) {
        eg.dameEgresos(function (error, data) {
            res.status(200).send(data);
        });
    });
});
router.post('/obtenerEgreso', function (req, res) {
    //console.log("entrooooo al api");
    var params = req.body;
    //console.log("*********************");
    //console.log(params);
    //console.log("**********************");
    eg.obtenerEgreso(params, function (error, data) {
        // console.log(data);
        res.status(200).send(data[0]);
//        cl.dameClientes(function (error, data) {
//            res.status(200).sendStatus (data);
//        });
    });
});
router.put('/actualizarEgreso', function (req, res) {
    var params = req.body;
    eg.actualizarEgresos(params, function (error, data) {
        if (data == 1) {
            eg.dameEgresos(function (error, data) {
                res.status(200).send(data);
            });
        }
    });
});
router.put('/eliminarEgreso', function (req, res) {
    var params = req.body;
    //console.log(params)
    eg.eliminarEgresos(params, function (error, data) {
        if (data == 1) {
            eg.dameEgresos(function (error, data) {
                res.status(200).send(data);
            });
        }

    });
});
/////*** PAGOS***/////
router.get('/pagos', function (req, res) {
    pg.damePagos(function (error, data) {
        res.status(200).send(data);
    });
});
router.post('/damePagosCliente', function (req, res) {
    var objCliente = req.body;
    pg.damePagosCliente(objCliente, function (error, data) {
        res.status(200).send(data);
    });
});
//////////////pruevas en postman
router.post('/guardarPago', function (req, res) {
    var params = req.body;
    console.log(params);
    console.log("**********************");
    pg.guardarPagos(params, function (error, data) {
        pg.damePagos(function (error, data) {
            res.status(200).send(data);
        });
    });
});
router.post('/obtenerPago', function (req, res) {
    var params = req.body;
    console.log(params);
    console.log("**********************");
    pg.obtenerPago(params, function (error, data) {
        res.status(200).send(data[0]);
    });
});
router.put('/actualizarPago', function (req, res) {
    var params = req.body;
    pg.actualizarPagos(params, function (error, data) {
        if (data == 1) {
            pg.damePagos(function (error, data) {
                res.status(200).send(data);
            });
        }
    });
});
router.put('/eliminarPago', function (req, res) {
    var params = req.body;
    //console.log(params)
    pg.eliminarPagos(params, function (error, data) {
        if (data == 1) {
            pg.damePagos(function (error, data) {
                res.status(200).send(data);
            });
        }

    });
});
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-width, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow', 'GET,Post,OPTIONS,PUT,DELETE');
    next();
});
socket.on('connection', function (socket) {
    console.log('Alguien se ha conectado con Sockets');
    //nos va a servir para enviar o emitir sockets
    socket.emit('messages');
    socket.on('new-message', function () {
        console.log("entro al mensaje emitido");
        socket.emit('messages');
    });
});
app.use('/api', router);
server.listen('3333', function () {
    console.log("Servidor levantado satisfactoriamente");
    console.log("http://localhost:3333/api");
});


