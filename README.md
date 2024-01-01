# be-micromanaging [TODO]

## Example 1

```html
<div itemscope be-micromanaging='{
  "expr":{
    "Person's age is: ": {"age": ":number"},
    "Date of birth: ": {"dob": ":Date"},
    "Last name: ": {"surname": ":string"},
    "<meta>": {"zipCode": ":string"}
    
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

Optionally, add model values:

## Example 2

```html
<div itemscope be-micromanaging='{
  "expr":{
    "Person's age is: ": {"age": 54},
    "Date of birth: ": {"dob": "1994-11-05T13:15:30Z:date"},
    "Last name: ": {"surname": "Milei"},
    "<meta>": {"zipCode": "12321"}
    
  },
  "number.intl": { //optional
    "style": "currency", "currency": "EUR"
  },
  "itemDivider": "span", //optional,
  "labelTag": "span" //optional -- inherits from 
}'></div>
```

Generates:

Generates:

```html
<div itemscope>
   <span>
      <span>Person's age is: </span><data itemprop=age value=54>54</data>
    </span>
   <span>
      <span>Date of birth: </span><time itemprop=dob datetime=1994-11-05T13:15:30Z></time>
    </span>
    <span>
      <span>Last name: </span><span itemprop=surname>Milei</span>
    </span>
   <meta itemprop=zipCode content=12321>
</div>
```

can update via oDiv.beEnhanced.by.beMicromanaging.model.age = 23

or if using trans-render notation:

"+beMicromanaging.model.age"

## Example 3

```html
<tr itemscope be-micromanaging='{
  "expr":{
    "Person's age is: ": {"age": 54},
    "Date of birth: ": {"dob": "1994-11-05T13:15:30Z:date"},
    "Last name: ": {"surname": "Milei"},
    "<meta>": {"zipCode": "12321"}
    
  },
  "number.intl": { //optional
    "style": "currency", "currency": "EUR"
  },
  "itemDivider": "<td class='hello'>", //optional,
  "labelTag": "span" //optional -- inherits from 
}'></tr>
```

generates:

```html
<tr itemscope>
   <td class=hello>
      <span>Person's age is: </span><data itemprop=age value=54>54</data>
    </span>
   <td class=hello>
      <span>Date of birth: </span><time itemprop=dob datetime=1994-11-05T13:15:30Z></time>
    </td>
    <td class=hello>
      <span>Last name: </span><span itemprop=surname>Milei</span>
    </td>
   <meta itemprop=zipCode content=12321>
</tr>
```

Problem -- meta gets booted out of table most rudely.

So solution:

```html
<tr itemscope be-micromanaging='{
  "expr":{
    "Person's age is: ": {"age": 54},
    "Date of birth: ": {"dob": "1994-11-05T13:15:30Z:date"},
    "Last name: ": {
      "surname": "Milei",
      "<meta>": {"zipCode": "12321"}
    },
    
    
  },
  "number.intl": { //optional
    "style": "currency", "currency": "EUR"
  },
  "itemDivider": "<td class='hello'>", //optional,
  "labelTag": "span" //optional -- inherits from 
}'></tr>
```

generates:


```html
<tr itemscope>
   <td class=hello>
      <span>Person's age is: </span><data itemprop=age value=54>54</data>
    </span>
   <td class=hello>
      <span>Date of birth: </span><time itemprop=dob datetime=1994-11-05T13:15:30Z></time>
    </td>
    <td class=hello>
      <span>Last name: </span><span itemprop=surname>Milei</span>
      <meta itemprop=zipCode content=12321>
    </td>
</tr>
```

