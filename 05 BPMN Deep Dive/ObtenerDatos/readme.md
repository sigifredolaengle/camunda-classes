# Check Rut Improved Example

![BPMN Diagram](process.png)

|   Nr. | Tópico                                       | Actividad                                                                                                                                                                                             |
| :---: | :---                                         | :---                                                                                                                                                                                                  |
|     1 | **'Mostrar datos' User Task**                | 1. En la pestaña 'Forms' agrega una variable del siguiente modo:<br>1a. **ID** = 'nombre', **Type** = 'string', **Label** = 'Nombre'. <br>1b. **ID** = 'rut', **Type** = 'string', **Label** = 'RUT'. |
|     2 | **'Datos incorrectos' Error Boundary Event** | 1. Dejar como está.                                                                                                                                                                                   |
|     3 | **'1 minutos' Timer Intermediate Event**     | 1. Seleccionar los siguientes parámetros: <br> 1a. **Timer Definition Type** = 'Duration'. <br> 1b. **Timer Definition** = 'PT1M'.                                                                    |
|     4 | **'Obtener datos' Call Activity**            | 1. Seleccionar los siguientes parámetros: <br> 1a. **Call Activity Type** = 'BPMN'. <br> 1b. **Called Element** = 'CheckRut'. <br> 2. En la pestaña 'Variables' agregar el siguiente **Out Mapping**: <br> 2a. **Type** = 'All'. |
