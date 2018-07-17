# Fill the Form

![Diagram](process.png)

## Process

Id 
: FillTheForm
Name 
: FillTheForm
Executable 
: ☑


## Receive Start Event

Create a new message with **Message Name** = msg-fillform
and select it.

## User Task: Llenar el formulario

### Form

| ID        | Type   | Label        | Default value | Constraints |
| :---:     | :---:  | :---         | :---          | :---        |
| firstname | string | Firstname    |               | required    |
| lastname  | string | Lastname     |               | required    |
| phone     | string | Phone Number |               |             |
| age       | long   | Age          | 18            |             |

## Sequence Flow: Sí

Condition Type
: Expression
Expression
: #{acepta}

## Sequence Flow: No

Condition Type
: Expression
Expression
: #{not acepta}

## Send Event: msg-appreceived

Implementation
: Expression

Expression
:
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

Implementation
: Expression

Expression
:
```
${
execution.getProcessEngineServices()
         .getRuntimeService()
         .createMessageCorrelation("msg-notinterested")
         .processInstanceBusinessKey(correlationId)
         .correlateWithResult()
}
```
