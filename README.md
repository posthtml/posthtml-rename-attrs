# posthtml-rename-attrs

PostHTMLRenameAttrs is plugin for [PostHTML](https://github.com/posthtml/posthtml). It rename HTML tags attrs with passed function.

## Usage

``` javascript
const posthtml = require('posthtml'),
    html = '<div class="wow">OMG</div>';

const prefix = v => v === 'class' ? `prefix-${v}` : v;

posthtml([ require('posthtml-rename-attrs')(prefix)])
    .process(html)
    .then(function(result) {
        console.log(result);
    });

// <div prefix-class="wow">OMG</div>
```
