# Assesment Process

![Diagram](process.png)

## Process

<dl>
<dt>Id </dt>
<dd>AssesmentProcess </dd>
<dt>Name </dt>
<dd>AssesmentProcess </dd>
<dt>Executable </dt>
<dd>☑</dd>
</dl>


## User Task: Check Message

### Form

| ID        | Type   | Label        | Default value | Constraints |
| :---:     | :---:  | :---         | :---          | :---        |
| firstname | string | Firstname    |               |             |
| lastname  | string | Lastname     |               |             |
| phone     | string | Phone Number |               |             |
| msg       | string | Age group    |               |             |

## Business Rule: Create Message

### General - Details

<dl>
<dt>Implementation</dt>
<dd>DMN </dd>
<dt>Decision Ref</dt>
<dd>messageDecision</dd>
<dt>Binding </dt>
<dd>latest </dd>
<dt>Result Variable</dt>
<dd>msg</dd>
<dt>Map Decision Result</dt>
<dd>singleEntry</dd>
</dl>


# DMN: Create Message

<dl>
<dt>Name</dt>
<dd>Create Message</dd>
<dt>Decision Id</dt>
<dd>messageDecision</dd>
<dt>Hit Policy</dt>
<dd>Unique</dd>
</dl>

## Inputs

| Input Label | Input Variable | Type    |
| :---:      | :----:         | :---:   |
| Age        | age            | integer |

## Outputs

| Output Label | Output Variable | Type   |
| :---:        | :----:          | :---:  |
| Message      | message         | string |

## Relation

|      | age      | message    |
| ---: | :---:    | :---:      |
|    1 | <= 12    | "Toddler"  |
|    2 | ]12..18[ | "Teenager" |
|    3 | >= 18    | "Adult"    |
