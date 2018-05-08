---
title: Gateways
---

# URL

- [Gateways: https://docs.camunda.org/manual/7.8/reference/bpmn20/gateways/](https://docs.camunda.org/manual/7.8/reference/bpmn20/gateways/)

# Gateway exclusivo (XOR)

## URL

- [Exclusive Gateway: https://docs.camunda.org/manual/7.8/reference/bpmn20/gateways/exclusive-gateway/](https://docs.camunda.org/manual/7.8/reference/bpmn20/gateways/exclusive-gateway/)

Se puede definir directamente desde modeler, del siguiente modo:

- Click sobre la tarea que antecederá al gateway.
- Sobre las opciones que se despliegan, elegir 'Append ExclusiveGateway' y posicionarlo sobre el dibujo.
- Click sobre el gateway. Sobre las opciones que se despliegan, elegir el tipo de tarea que secundará al gateway. Hacer esto para cada tarea que se necesite definir.
- Click sobre las flechas que van desde el gateway a cada tarea. Sobre el menú de propiedades que se abre a la derecha, se puede establecer la condición que nos llevará al gateway que conecta esa flecha. Elegir 'condition type -> expresión'. Escribir de la forma '${a == b}'.
- Para definir una tarea como 'default', click sobre la flecha que lleva a esa tarea, click en la llave inglesa y click en 'Default Flow'.
- Para definir las variables que recibe y / o entrega el gateway, click sobre el gateway. En el menú de propiedades que se despliega a la dercha, elegir la pestaña 'Input / Output', y definir las variables en la casilla correspondiente.