# Assesment Process

![Diagram](process.png)

## Process

Id 
: AssesmentProcess 
Name 
: AssesmentProcess 
Executable 
: ☑


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

Implementation
: DMN 
Decision Ref
: messageDecision
Binding 
: latest 
Result Variable
: msg
Map Decision Result
: singleEntry


# DMN: Create Message

Name
: Create Message
Decision Id
: messageDecision
Hit Policy
: Unique

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
