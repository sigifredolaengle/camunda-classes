---
title: Business Rule
---

# URLs

- [Crear Tabla en Modeler: https://docs.camunda.org/get-started/dmn11/model/](https://docs.camunda.org/get-started/dmn11/model/)
- [Business Rule Task: https://docs.camunda.org/manual/7.8/reference/bpmn20/tasks/business-rule-task/](https://docs.camunda.org/manual/7.8/reference/bpmn20/tasks/business-rule-task/)

# Importante

- Guardar la tabla DMN en la misma carpeta que se encuentra process.bpmn (ie. src/main/resources)
- **Map Decision Result** = **singleEntry**
- **Implementation** = **DMN**

## Lo siguiente debe coincidir entre la tabla DMN y la sección Details del BPMN

| DMN              | BPMN                 |
|------------------|----------------------|
| decision id      | Decision Ref         |
| Output Name      | Result Variable      |

- Input Expression deben ser variables usadas en el proceso


