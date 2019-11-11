# Request
## Request URL
http://localhost:8080/engine-rest/process-definition/key/CheckRisk2/start

## Request Type
POST

# Headers

KEY | VALUE
--- | ---
Content-Type | application/json


# Body
# Body Type
raw

## Body Content
```javascript
{
    "variables": {
        "age": {
            "value": "{{age}}",
            "type": "long"
        },
        "carManufacturer": {
            "value": "{{car_manufacturer}}",
            "type": "string"
        },
        "carType": {
            "value": "{{car_type}}",
            "type": "string"
        }
    }
}
```

# Pre-request Script

```javascript
// Helper functions

// Get a random element from an array
get_random = function (list) {
  return list[Math.floor((Math.random()*list.length))];
};

// Random number between min and max
random_number = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// Age interval
min_age = 18;
max_age = 68;

// Car manufacturers
car_manufacturers = ["Porsche", "BMW", "Toyota", "Audi"];

// Car Types
car_types = {
    "Porsche": ["911", "811"],
    "BMW": ["X3", "X2", "X1"],
    "Audi": ["A6", "A7", "A8"],
    "Toyota": ["Porte", "Prius C"]
};


// Random values
age = random_number(min_age, max_age);
car_manufacturer = get_random(car_manufacturers);
car_type = get_random(car_types[car_manufacturer]);

// Set variables
pm.globals.set("age", age);
pm.globals.set("car_manufacturer", car_manufacturer);
pm.globals.set("car_type", car_type);
```
