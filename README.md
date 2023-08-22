# be-micromanaging

```html
<div itemscope>
    <script nomodule be-micromanaging>
        export const calculator = [{
            ifAllOf:['A', 'B'],
            do: ({A, B}) => ({
                C: A + B
            })
        }]
    </script>
    <meta itemprop=A content=test1>
    <meta itemprop=B content=test2>
</div>
```

Generates:

```html
<div itemscope>
    <script nomodule be-micromanaging>
        export const someName = {
            ifAllOf:['A', 'B'],
            do: ({A, B}) => ({
                C: A + B
            })
        }
    </script>
    <meta itemprop=A content=test1>
    <meta itemprop=B content=test2>
    <meta itemprop=C content=test1test2>
</div>
```