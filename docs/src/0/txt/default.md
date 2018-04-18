# Markdown

デフォルト値。

* A
* B

A|B
-|-
1|2
3|4

## code

### sh

```sh
# コメント
Print () {
    local value=Some Value
    echo $value
}
Print()
```

### python

```python
import sys
sys.path.append('.')
print(sys.argv)

class A:
    def __init__(self): pass

if __name__ == '__main__':
    A()
```

### js

```js
// コメント
var val = 0;
for (var i=0; i<10; i++) {
    console.log(i);
}
alert('Finished.');
```

### html

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <title>require + jQuery</title>
    <script src="main.js"></script>
</head>
<body></body>
</html>
```

### markdown

```markdown
<!-- HTML comment -->

# Title
## H2
### H3

* A
* B

A|B
-|-
1|2
3|4
```
