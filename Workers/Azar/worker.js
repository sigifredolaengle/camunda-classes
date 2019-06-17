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

// Retorna un entero entre 0 y 6.
async function lanzarDado(context) {
    const {
        variables
    } = context;

    var resultado = Math.floor(Math.random() * 6)

    debugWorker('Dado: ' + resultado);

    return {
        variables: {
            dado: resultado
        }
    };
}

worker.subscribe('LanzarDado', [], lanzarDado);

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
