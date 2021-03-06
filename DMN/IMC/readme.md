# Proceso BPM

![BPMN Diagram](img/process.png)

|   Nr. | Tópico                                   | Actividad                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :---: | :---                                     | :---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     1 | **StartEvent**                           | 1. En la pestaña 'General', configura el parámetro **Initiator** = 'starter'<br>'starter' es una variable en la que almacenaremos el ID de la persona que inicia el flujo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     2 | **'Ingrese sus datos' User Task**        | 1 En la pestaña 'General', configura el parámetro **Assignee** = '${starter}'.<br>2. En la pestaña 'Forms' agrega variables del siguiente modo:<br>2a. **ID** = 'altura', **Type** = 'long', **Label** = 'Altura (cm)', **Default Value** = '170', <br> **Validation** <br> **name** = 'min', **Config** = '1'.  <br><br>2b. **ID** = 'peso', **Type** = 'long', **Label** = Peso (kg)', **Default Value** = '70', <br> **Validation** <br> **name** = 'min', **Config** = '1'. <br><br>2c. **ID** = 'actividad_fisica', **Type** = 'enum', **Label** = 'Actividad Física', <br> **Values** <br> **Id** = 'nada', **Name** = 'Nada' <br> **Id** = 'poca', **Name** = 'Poca' <br> **Id** = 'normal', **Name** = 'Normal' <br> **Id** = 'mucha', **Name** = 'Mucha'. |
|     3 | **'Ver resultado' User Task**            | 1. En la pestaña 'General', configura el parámetro **Assignee** = '${starter}'.<br>2. En la pestaña 'Forms', agrega una variable del siguiente modo:<br>2a. **ID** = 'resultado', **Type** = 'string', **Label** = 'Nivel de riesgo'. <br> **Validation** <br> **name** = 'readonly'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|     4 | **'Calcular riesgo' Business Rule Task** | 1. En la pestaña 'General', configura el parámetro **Implementation** = 'DMN', **Desicion Ref** = 'calcular_riesgo', **Result Variable** = 'resultado', **Map Desicion Result** = 'singleEntry'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|     5 | **Modelo**         | 1. Sin seleccionar ningún objeto, asegure que el 'General' esté seleccionada la opción 'Executable'.<br> 2. Ingresar los siguentes datos: <br>**Id** = 'imc' <br> **Name** = 'IMC'.                                                                                                                                                                                                                                                                                                        |

# DMN

![DMN Table](img/dmn.png)

Llenar las tablas como aparece en la figura.

### Información importante:

| Id              | Name            | Hit Policy |
| :---:           | :---:           | :---:      |
| calcular_riesgo | Calcular Riesgo | F (FIRST)  |

### Entradas

| Columna | Input Label      | Input Expression                             | Expression Language | Type   |
|   :---: | :---:            | :---:                                        | :---:               | :---:  |
|       1 | IMC              | peso / ((altura / 100.0) * (altura / 100.0)) | JavaScript          | double |
|       2 | Actividad Física | actividad_fisica                             |                     | string |

Para poder agregar **Expression Language** en la primera columna basta con presionar **change to script**
bajo **Input Expression**.

### Salidas

| Columna | Output Label | Output Name | Type   |
| :---:   | :---:        | :---:       | :---:  |
| 1       | Resultado | resultado | string |
