# Compensation and Cancel Events

![Diagram](process.png)


## Process
<dl>
<dt>Id </dt>
<dd>Compensation </dd>
<dt>Name </dt>
<dd>Compensations </dd>
<dt>Executable </dt>
<dd>☑</dd>
</dl>

## User Task: Set Name

### Form

| ID    | Type   | Label | Default value | Constraints |
| :---: | :---:  | :---  | :---          | :---        |
| name  | string | Name  |               | required    |


## User Task: Add error message

### Form

| ID      | Type   | Label         | Default value                                   | Constraints |
| :---:   | :---:  | :---          | :---                                            | :---        |
| name    | string | Name          |                                                 | readonly    |
| message | string | Error Message | Name too short: must have at leats 5 characters | readonly    |

## User Task: Check bad value

### Form

| ID      | Type   | Label         | Default value | Constraints |
| :---:   | :---:  | :---          | :---          | :---        |
| name    | string | Name          |               |     |
| message | string | Error Message |               | readonly    |

## User Task: Check value

### Form

| ID    | Type   | Label | Default value | Constraints |
| :---: | :---:  | :---  | :---          | :---        |
| name  | string | Name  |               | readonly    |

## Sequence Flow: Ok

Set as default flow.

## Sequence Flow: Too short

### General - Details

<dl>
<dt>Condition Type</dt>
<dd>Script</dd>
<dt>Script Format</dt>
<dd>groovy</dd>
<dt>Script Type</dt>
<dd>Inline Script</dd>
<dt>Script</dt>
<dd>name.length() >= 5</dd>
</dl>
