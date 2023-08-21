# be-micromanaging

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
    <meta itemprop=A>
    <meta itemprop=B>
</div>
```