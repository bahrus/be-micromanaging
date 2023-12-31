# be-micromanaging

```html
<div itemscope be-micromanaging='{
  "types"; ["number", "date", "string"],
  "props": ["age", "dob", "surname"],
  "expr": [2, ", age: ", 0, ", dob: ", 1], 
  "model" : {}
}'></div>
```

Generates:

```html
<div itemscope>
   <span itemprop=surname></span><span>, age: </span><data itemprop=age></data><span>, dob: </span><time itemprop=dob></time>
</div>
```
