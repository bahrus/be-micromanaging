# be-micromanaging [TODO]

```html
<div itemscope be-micromanaging='{
  "expr":{
    "age: ": {"age": "number"},
    "dob: ": {"dob": "date"},
    "surname: ": {"surname": "string"},
    "<meta>": {"zipCode": "string"}
    
  },
  "number.intl": {
    "style": "currency", "currency": "EUR"
  },
  
}'></div>
```

Generates:

```html
<div itemscope>
   <span>age: </span><data itemprop=age></data><span>dob: </span><span itemprop=surname></span><time itemprop=dob></time>
   <meta itemprop=zipCode>
</div>
```

Uses be-value-added when needed

Optionally, add model property
