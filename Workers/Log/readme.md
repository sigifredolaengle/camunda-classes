# Log

![BPMN Diagram](process.png)

## Documentación

[External Tasks](https://docs.camunda.org/manual/7.9/user-guide/process-engine/external-tasks/)

|   Nr. | Tópico                                        | Actividad                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :---: | :---                                          | :---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|     1 | **StartEvent**                    | 1. En la pestaña 'General', configura el parámetro **Initiator** = 'starter'<br>'starter' es una variable en la que almacenaremos el ID de la persona que inicia el flujo.                                                                                                                                                                                                                                                                                                                                                                                                                |
|     2 | **'Comunicarse con logger' Service Task** | 1. Configura el parámetro 'Implementation' = 'External'. <br> Configura el parámetro 'Topic' = 'Logger'. <br>                                                                                                                                                                                                                                                                                                                                                                                        |
|     3 | **'Escribir mensaje' User Task** | 1. En la pestaña 'General', configura el parámetro **Assignee** = '${starter}'.<br>2. En la pestaña 'Forms', agrega una variable del siguiente modo:<br>2a. **ID** = 'mensaje', **Type** = 'string', **Label** = 'Mensaje'. <br> **Validation** <br> **name** = 'required'.  <br><br>|
|     3 | **'Leer log' User Task** | 1. En la pestaña 'General', configura el parámetro **Assignee** = '${starter}'.<br>2. En la pestaña 'Forms', agrega una variable del siguiente modo:<br>2a. **ID** = 'log', **Type** = 'string', **Label** = 'Log'. <br> **Validation** <br> **name** = 'readonly'.  <br><br>|
|     4 | **Modelo**         | 1. Sin seleccionar ningún objeto, asegure que el 'General' esté seleccionada la opción 'Executable'.<br> 2. Ingresar los siguentes datos: <br>**Id** = 'Log' <br> **Name** = 'Log'.                                                                                                                                                                                                                                                                      |