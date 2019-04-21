# Fill the Form

![Diagram](process.png)

# Notes

## Send Event: msg-appreceived

### Implementation
Expression

### Expression
```
${
execution.getProcessEngineServices()
         .getRuntimeService()
         .createMessageCorrelation("msg-appreceived")
         .processInstanceBusinessKey(correlationId)
         .setVariable("firstname",firstname)
         .setVariable("lastname",lastname)
         .setVariable("phone",phone)
         .setVariable("age",age)
         .correlateWithResult()
}
```

## Send Event: msg-notinterested

### Implementation
Expression

### Expression
```
${
execution.getProcessEngineServices()
         .getRuntimeService()
         .createMessageCorrelation("msg-notinterested")
         .processInstanceBusinessKey(correlationId)
         .correlateWithResult()
}
```
