# js-url-parser

### Usage

input
```html
<script src="url-parser.js"></script>
```
```js
console.log(url_parse('#'));
console.log(url_parse(document.location.href));
console.log(url_parse('https://console.webcloud.io/index.html'));
console.log(url_parameterByName_get('https://www.youtube.com/watch?v=Tz1hhx8yxyU&feature=youtu.be&t=1m9s', 'v');
```

output
```
absoluteUrl: "/index.html"
file:        "index.html"
hash:        ""
domainHost:  "console.webcloud.io",
domain:      "webcloud.io"
domainTld:   "io"
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
