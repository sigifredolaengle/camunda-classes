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


async function agendarHotel(context) {

  const {
    variables
  } = context;

  var orden = variables.orden;
  var hotel = variables.hotel;
  var tipo = variables.tipo_habitacion;

  await delay(Math.trunc(Math.random() * 1.5));

  var habitacion = Math.trunc(Math.random * 600);

  // notify we are done with an updated order variable
  return {
    variables: {
      orden: orden,
      hotel: hotel,
      tipo: tipo,
      habitacion: habitacion
    }
  };
}

async function desagendarHotel(context) {

  const {
    variables,
    extendLock
  } = context;

  const orden = variables.orden;
  const hotel = variables.hotel;

    await extendLock(5000);

    await delay(Math.trunc(Math.random() * 3));

  // notify we are done with a new order variable
  return {
    variables: {
      orden: orden
    }
  };
}

worker.subscribe('AgendarEstadia', [ 'orden', 'hotel', 'tipo_habitacion' ], agendarHotel);

worker.subscribe('DesagendarEstadia', [ 'orden', 'hotel' ], desagendarHotel);


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
