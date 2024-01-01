# be-micromanaging [TODO]

```html
<div itemscope be-micromanaging='{
  "expr":{
    "Person's age is: ": {"age": "number"},
    "Date of birth: ": {"dob": "date"},
    "Last name: ": {"surname": "string"},
    "<meta>": {"zipCode": "string"}
    
  },
  "number.intl": { //optional
    "style": "currency", "currency": "EUR"
  },
  "itemDivider": "span", //optional,
  "labelTag": "span" //optional -- inherits from 
}'></div>
```

Have to avoid xss

Generates:

```html
<div itemscope>
   <span>
      <span>Person's age is: </span><data itemprop=age></data>
    </span>
   <span>
      <span>Date of birth: </span><time itemprop=dob></time>
    </span>
    <span>
      <span>Last name: </span><span itemprop=surname></span>
    </span>
   <meta itemprop=zipCode>
</div>
```

Uses be-value-added when needed

Optionally, add model property
