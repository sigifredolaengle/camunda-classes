# Main Process

![Diagram](process.png)

## Process

Id 
: MainProcess 
Name 
: MainProcess 
Executable 
: ☑


## Start Event

### Form

| ID     | Type   | Label         | Default value | Constraints |
| :---:  | :---:  | :---          | :---          | :---        |
| ticket | string | Ticket Number |               | required    |

Set ticket as Business Key

## Send Task: Send out a form for filling out


Implementation 
: Expression

Expression 
:
```
${
execution.getProcessEngineServices()
         .getRuntimeService()
         .createMessageCorrelation("msg-fillform")
         .setVariable("correlationId",execution.getBusinessKey())
         .correlateWithResult()
}
```


## Receive Event: Customer is not interested

Create a new message with **Message Name** = msg-notinterested
and select it.

## Receive Event: Application received

Create a new message with **Message Name** = msg-appreceived
and select it.

## Intermediate Timer Catch Event


Timer Definition Type 
: Duration

Timer Definition 
: PT3M 


## Call Activity: Archive Details

### General - Details


CallActivity Type
: BPMN 
Called Element 
: ArchiveDetails 
Binding 
: latest 
Business Key 
: ☑
Business Key Expression 
: #{execution.processBusinessKey} 


### Variables - In Mappings

Create a single mapping of type **All**.

## Call Activity: Make Assesment Process


CallActivity Type
: BPMN 
Called Element 
: AssesmentProcess 
Binding 
: latest 
Business Key 
: ☑
Business Key Expression 
: #{execution.processBusinessKey} 


## User Task: Send Reminder

Is left untouched.
