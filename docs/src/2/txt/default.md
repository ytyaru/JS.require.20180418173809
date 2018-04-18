# Markdown

デフォルト値。

* A
* B

A|B
-|-
1|2
3|4

## code

### shell

```shell:main.sh
# コメント
Print () {
    local value=Some Value
    echo $value
}
Print()
```

### python

```python:main.py
import sys
sys.path.append('.')
print(sys.argv)

class A:
    def __init__(self): pass

if __name__ == '__main__':
    A()
```

### js

```js:index.js
// コメント
var val = 0;
for (var i=0; i<10; i++) {
    console.log(i);
}
alert('Finished.');
```

### html

```html:index.html
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

```markdown:ReadMe.md
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

```markdown:LICENSE.md
# ライセンスだよ
```

