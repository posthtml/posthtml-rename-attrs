# posthtml-rename-tags

PostHTMLRenameTags is plugin for [PostHTML](https://github.com/posthtml/posthtml). It replace HTML tags with new tag.

## Usage

``` javascript
var posthtml = require('posthtml'),
    html = '<div class="wow">OMG</div>';

posthtml([ require('posthtml-rename-tags')({
    '.wow' : 'span'
})])
    .process(html)
    .then(function(result) {
        console.log(result);
    });

// <span class="wow">OMG</span>
```
