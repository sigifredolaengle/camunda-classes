# Main Process

![Diagram](process.png)

# Notes

## Send out a form for filling out

### Implementation

Expression

### Expression

```
${
execution.getProcessEngineServices()
         .getRuntimeService()
         .createMessageCorrelation("msg-fillform")
         .setVariable("correlationId",execution.getBusinessKey())
         .correlateWithResult()
}
```
