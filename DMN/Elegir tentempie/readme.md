# Proceso BPM
![BPMN Diagram](img/process.png)

|   Nr. | Tópico                            | Actividad                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :---: | :---                              | :---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     1 | **StartEvent**                    | 1. En la pestaña 'General', configura el parámetro **Initiator** = 'starter'<br>'starter' es una variable en la que almacenaremos el ID de la persona que inicia el flujo.                                                                                                                                                                                                                                                                                                                                                                                                                |
|     2 | **'Ingresar datos' User Task** | 1 En la pestaña 'General', configura el parámetro **Assignee** = '${starter}'.<br>2. En la pestaña 'Forms' agrega variables del siguiente modo:<br>2a. **ID** = 'dia', **Type** = 'enum', **Label** = 'Día de la semana', <br> **Values** <br> **Id** = 'lunes', **Name** = 'Lunes' <br>  **Id** = 'martes', **Name** = 'Martes' <br> **Id** = 'miercoles', **Name** = 'Miércoles' <br> **Id** = 'jueves', **Name** = 'Jueves' <br> **Id** = 'viernes', **Name** = 'Viernes' <br> **Id** = 'sabado', **Name** = 'Sábado' <br> **Id** = 'domingo', **Name** = 'Domingo' <br>**Validation** <br> **name** = 'required'<br><br>2b. **ID** = 'hora', **Type** = 'long', **Label** = 'Hora del día', <br> **Validation** <br> **name** = 'required' <br> **name** = 'min', **Config** = '1' <br> **name** = 'max', **Config** = '24'. <br><br> 2c. **ID** = 'hambre', **Type** = 'enum', **Label** = 'Cuanta hambre tienes?', <br> **Values** <br> **Id** = 'poca', **Name** = 'Poca' <br> **Id** = 'media', **Name** = 'Media' <br> **Id** = 'mucha', **Name** = 'Mucha'<br><br>2d. **ID** = 'trabajo', **Type** = 'boolean', **Label** = 'Aún no terminas de trabajar?'                                 |
|     3 | **'Ver resultado' User Task** | 1. En la pestaña 'General', configura el parámetro **Assignee** = '${starter}'.<br>2. En la pestaña 'Forms', agrega una variable del siguiente modo:<br>2a. **ID** = 'comida', **Type** = 'string', **Label** = 'Comida'. <br> **Validation** <br> **name** = 'readonly'.  <br><br>2b. **ID** = 'bebida', **Type** = 'string', **Label** = 'Bebida'. <br> **Validation** <br> **name** = 'readonly'<br><br>2c. **ID** = 'mensaje', **Type** = 'string', **Label** = 'Mensaje'. <br> **Validation** <br> **name** = 'readonly'                                                                                                                                                    |
|     4 | **'Seleccionar tentempié' Business Rule Task** | 1. En la pestaña 'General', configura el parámetro **Implementation** = 'DMN', **Desicion Ref** = 'dmn_tentempie', **Result Variable** = 'resultado', **Map Desicion Result** = 'singleResult'. <br> 2. En la pestaña "Input/Output" agregar los siguientes "Output Parameters": <br> 2a. **Name** = 'comida', **Type** = 'Text', **Value** = '${resultado.comida}' <br>   2b. **Name** = 'bebida, **Type** = 'Text', **Value** = '${resultado.bebida}' <br> 2c. **Name** = 'mensaje', **Type** = 'Text', **Value** = '${resultado.mensaje}'|
|     5 | **Modelo**         | 1. Sin seleccionar ningún objeto, asegure que el 'General' esté seleccionada la opción 'Executable'.<br> 2. Ingresar los siguentes datos: <br>**Id** = 'process_tentempie' <br> **Name** = 'Elegir tentempié'.                                                                                                                                                                                                                                                                                                               |

# DMN

## Diagrama de decisión

![DMN Table](img/dmn.png)

Crear las tres tablas de decisión como aparece en la figura.
Seleccionar cada una y cambiar su tipo presionando en la llave inglesa a "Decision Table".

## DMN Seleccionar Comida

![DMN Table](img/dmn1.png)

Llenar las tablas como aparece en la figura.

### Información importante:

| Id         | Name               | Hit Policy |
| :---:      | :---:              | :---:      |
| dmn_comida | Seleccionar comida | U (UNIQUE) |

### Entradas

| Columna | Input Label     | Input Expression | Type    |
|   :---: | :---:           | :---:            | :---:   |
|       1 | Nivel de hambre | hambre           | string  |
|       2 | Hora            | hora             | integer |

### Salidas

| Columna | Output Label | Output Name | Type   |
| :---:   | :---:        | :---:       | :---:  |
| 1       | Comida       | comida      | string |

## DMN Seleccion Bebida

![DMN Table](img/dmn2.png)

Llenar las tablas como aparece en la figura.

### Información importante:

| Id         | Name               | Hit Policy |
| :---:      | :---:              | :---:      |
| dmn_bebida | Seleccionar bebida | U (UNIQUE) |

### Entradas

| Columna | Input Label              | Input Expression | Type   |
| :---:   | :---:        | :---:       | :---:  |
|       1 | Día de la semana         | dia              | string |
|       2 | Queda trabajo por hacer? | trabajo          | boolean |

### Salidas

| Columna | Output Label | Output Name | Type   |
| :---:   | :---:        | :---:       | :---:  |
|       1 | Bebida       | bebida      | string |


## DMN Tentempié

![DMN Table](img/dmn3.png)

Llenar las tablas como aparece en la figura.

### Información importante:

| Id            | Name      | Hit Policy |
| :---:         | :---:     | :---:      |
| dmn_tentempie | Tentempié | F (UNIQUE) |

### Entradas

| Columna | Input Label | Input Expression | Type    |
| :---:   | :---:        | :---:       | :---:  |
|       1 | Comida      | comida           | string  |
|       2 | Bebida      | bebida           | string  |

### Salidas

| Columna | Output Label | Output Name | Type   |
| :---:   | :---:        | :---:       | :---:  |
|       1 | Mensaje      | mensaje     | string |
|       2 | Comida       | comida      | string |
|       3 | Bebida       | bebida      | string |
