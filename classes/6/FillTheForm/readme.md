# Fill the Form

![Diagram](process.png)

## Process

<dl>
<dt>Id </dt>
<dd>FillTheForm</dd>
<dt>Name </dt>
<dd>FillTheForm</dd>
<dt>Executable </dt>
<dd>☑</dd>
</dl>

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

<dl>
<dt>Condition Type</dt>
<dd>Expression</dd>
<dt>Expression</dt>
<dd>#{acepta}</dd>
</dl>

## Sequence Flow: No

<dl>
<dt>Condition Type</dt>
<dd>Expression</dd>
<dt>Expression</dt>
<dd>#{not acepta}</dd>
</dl>

## Send Event: msg-appreceived

<dl>
<dt>Implementation</dt>
<dd>Expression</dd>
<dt>Expression</dt>
<dd>${execution.getProcessEngineServices().getRuntimeService().createMessageCorrelation("msg-appreceived").processInstanceBusinessKey(correlationId).setVariable("firstname",firstname).setVariable("lastname",lastname).setVariable("phone",phone).setVariable("age",age).correlateWithResult()}</dd>
</dl>

## Send Event: msg-notinterested

<dl>
<dt>Implementation</dt>
<dd>Expression</dd>
<dt>Expression</dt>
<dd>${execution.getProcessEngineServices().getRuntimeService().createMessageCorrelation("msg-notinterested").processInstanceBusinessKey(correlationId).correlateWithResult()}</dd>
</dl>
