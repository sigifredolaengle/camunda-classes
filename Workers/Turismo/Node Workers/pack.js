#! /usr/bin/env nodejs

var Worker = require('camunda-worker-node');

var Backoff = require('camunda-worker-node/lib/backoff');
var Metrics = require('camunda-worker-node/lib/metrics');

var engineEndpoint = 'http://0.0.0.0:8080/engine-rest';


var debugWorker = require('debug')('worker');
var debugPack = require('debug')('pack');

var worker = new Worker(engineEndpoint, {
  maxTasks: 10,
  use: [
    [ Backoff, { maxActiveTasks: 50 } ],
    Metrics
  ]
});

const destinos = ["Roma", "Santiago", "Varsovia", "Dresden", "Quito"];
const aerolineas = ["LAN", "LATAM", "Aerolineas Argentinas"];
const pasajes = ["Económico", "Ejecutivo", "Primera clase"];
const hoteles = ["Económico", "Ejecutivo", "Primera clase"];
const habitaciones = ["Económico", "Ejecutivo", "Primera clase"];
var orden = 1;

async function elegirPack(context) {

  debugPack('Pack recibido');

  const {
    variables
  } = context;

  var myorden = orden++;
  var destino = "";
  var aerolinea = "";
  var tipo_pasaje = "";
  var tipo_habitacion = "";
  var contieneHotel = false;

  await delay(Math.trunc(Math.random() * 1.5));

  var pasaje = Math.trunc(Math.random * 600);
  var asiento = Math.trunc(Math.random * 600);

  destino = destinos[Math.floor(Math.random()*destinos.length)];
  aerolinea = aerolineas[Math.floor(Math.random()*aerolineas.length)];
  tipo_pasaje = pasajes[Math.floor(Math.random()*pasajes.length)];

  if (Math.random() < 0.4) {
    contieneHotel = true;
    hotel = hoteles[Math.floor(Math.random()*hoteles.length)];
    tipo_habitacion = habitaciones[Math.floor(Math.random()*habitaciones.length)];
    }


  // notify we are done with an updated order variable
  return {
    variables: {
      orden: myorden,
      contieneHotel: contieneHotel,
      contieneVuelo: true,
      destino: destino,
      aerolinea: aerolinea,
      tipo_pasaje: tipo_pasaje,
      tipo_habitacion: tipo_habitacion,
    }
  };
}

worker.subscribe('DecidirTipoPack', [], elegirPack);

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
