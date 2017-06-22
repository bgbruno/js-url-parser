# js-url-parser

### Usage

```html
<script src="url-parser.js"></script>
```
```js
console.log(parseURL('#'));
console.log(parseURL(document.location.href));
```

output
```
absoluteUrl: "/index.html"
file:        "index.html"
hash:        ""
host:        "console.webcloud.io"
params:      Object
path:        "/index.html"
pathName:    "/index.html"
port:        ""
protocol:    "https"
query:       ""
relative:    "/index.html"
segments:    Array(9)
source:      "https:// ... /login.html"
```
