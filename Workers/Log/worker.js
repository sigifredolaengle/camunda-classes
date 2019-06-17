#! /usr/bin/env nodejs

var Worker = require('camunda-worker-node');

var Backoff = require('camunda-worker-node/lib/backoff');
var Metrics = require('camunda-worker-node/lib/metrics');

var engineEndpoint = 'http://0.0.0.0:8080/engine-rest';


var debugWorker = require('debug')('worker');

var worker = new Worker(engineEndpoint, {
    maxTasks: 10,
    use: [
        [ Backoff, { maxActiveTasks: 50 } ],
        Metrics
    ]
});

var msgLog = ""

// Escribe mensaje en el log y luego retorna todo el log.
async function agregarMensaje(context) {
    const {
        variables
    } = context;

    var mensaje = variables.mensaje;

    // Se agrega la hora y un salto de linea al mensaje.
    var tiempo = new Date().toISOString();
    mensaje = tiempo + '\t' + mensaje + '\n';

    debugWorker('Agregando al log: ' + mensaje);

    msgLog += mensaje;

    return {
        variables: {
            log: msgLog
        }
    };
}

worker.subscribe('Logger', ['mensaje'], agregarMensaje);

// Debugging
worker.on('start', function() {
    debugWorker('starting');
});

worker.on('poll', function() {
    debugWorker('polling');
});

worker.on('error', function(err) {
    debugWorker('error: %s', err);
});
