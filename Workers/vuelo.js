#! /usr/bin/env nodejs

var Worker = require('camunda-worker-node');

var Backoff = require('camunda-worker-node/lib/backoff');
var Metrics = require('camunda-worker-node/lib/metrics');

var engineEndpoint = process.env.ENGINE_URL || 'http://0.0.0.0:8080/engine-rest';


var debugWorker = require('debug')('worker');

var worker = new Worker(engineEndpoint, {
  maxTasks: 10,
  use: [
    [ Backoff, { maxActiveTasks: 50 } ],
    Metrics
  ]
});


async function agendarVuelo(context) {

  const {
    variables
  } = context;

  var orden = variables.orden;
  var destino = variables.hotel;
  var aerolinea = variables.hotel;
  var tipo = variables.tipo_pasaje;

  await delay(Math.trunc(Math.random() * 1.5));

  var pasaje = Math.trunc(Math.random * 600);
  var asiento = Math.trunc(Math.random * 600);

  // notify we are done with an updated order variable
  return {
    variables: {
      orden: orden,
      pasaje: pasaje,
      asiento: asiento
    }
  };
}

async function desagendarVuelo(context) {

  const {
    variables,
    extendLock
  } = context;

  const orden = variables.orden;
  const aerolinea = variables.aerolinea;
  const pasaje = variables.pasaje;

    await extendLock(5000);

    await delay(Math.trunc(Math.random() * 3));

  // notify we are done with a new order variable
  return {
    variables: {
      orden: orden
    }
  };
}

worker.subscribe('AgendarVuelo', [ 'orden', 'aerolinea', 'tipo_pasaje', 'destino' ], agendarVuelo);

worker.subscribe('DesagendarVuelo', [ 'orden', 'aerolinea', 'pasaje' ], desagendarVuelo);


worker.on('start', function() {
  debugWorker('starting');
});

worker.on('poll', function() {
  debugWorker('polling');
});

// handle worker errors
worker.on('error', function(err) {
  debugWorker('error: %s', err);
});


// helpers ////////////////////

function delay(seconds) {

  return new Promise(function(resolve) {
    setTimeout(resolve, seconds * 1000);
  });

}
