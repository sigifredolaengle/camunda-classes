# Main Process

![Diagram](process.png)

## Process
<dl>
<dt>Id </dt>
<dd>MainProcess </dd>
<dt>Name </dt>
<dd>MainProcess </dd>
<dt>Executable </dt>
<dd>☑</dd>
</dl>


## Start Event

### Form

| ID     | Type   | Label         | Default value | Constraints |
| :---:  | :---:  | :---          | :---          | :---        |
| ticket | string | Ticket Number |               | required    |

Set ticket as Business Key

## Send Task: Send out a form for filling out


<dl>
<dt>Implementation </dt>
<dd>Expression</dd>

<dt>Expression </dt>
<dd> ${execution.getProcessEngineServices().getRuntimeService().createMessageCorrelation("msg-fillform").setVariable("correlationId",execution.getBusinessKey()).correlateWithResult()} </dd>
</dl>


## Receive Event: Customer is not interested

Create a new message with **Message Name** = msg-notinterested
and select it.

## Receive Event: Application received

Create a new message with **Message Name** = msg-appreceived
and select it.

## Intermediate Timer Catch Event


<dl>
<dt>Timer Definition Type </dt>
<dd>Duration</dd>

<dt>Timer Definition </dt>
<dd>PT3M </dd>
</dl>


## Call Activity: Archive Details

### General - Details


<dl>
<dt>CallActivity Type</dt>
<dd>BPMN </dd>
<dt>Called Element </dt>
<dd>ArchiveDetails </dd>
<dt>Binding </dt>
<dd>latest </dd>
<dt>Business Key </dt>
<dd>☑</dd>
<dt>Business Key Expression </dt>
<dd>#{execution.processBusinessKey} </dd>
</dl>


### Variables - In Mappings

Create a single mapping of type **All**.

## Call Activity: Make Assesment Process


<dl>
<dt>CallActivity Type</dt>
<dd>BPMN </dd>
<dt>Called Element </dt>
<dd>AssesmentProcess </dd>
<dt>Binding </dt>
<dd>latest </dd>
<dt>Business Key </dt>
<dd>☑</dd>
<dt>Business Key Expression </dt>
<dd>#{execution.processBusinessKey} </dd>
</dl>


## User Task: Send Reminder

Is left untouched.
