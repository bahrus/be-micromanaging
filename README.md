# be-micromanaging [TODO]

```html
<div itemscope be-micromanaging='{
  "props":{
    "age": "number",
    "dob": "date",
    "surname": "string"
  },
  "expr": [2, ", age: ", 0, ", dob: ", 1], 
}'></div>
```

Generates:

```html
<div itemscope>
   <span itemprop=surname></span><span>, age: </span><data itemprop=age></data><span>, dob: </span><time itemprop=dob></time>
</div>
```

Optionally, add model property
