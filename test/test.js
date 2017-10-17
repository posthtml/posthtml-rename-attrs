var posthtml = require('posthtml'),
    expect = require('chai').expect,
    renameTags = require('..');

const prefix = v => v === 'class' ? `prefix-${v}` : v;

describe('Plugin', function() {

    it('should process simple class selectors', function() {
        var options = { '.wow': prefix },
            html = '<div class="wow">OMG</div>';

        return pluginProcess(options, html)
            .then(function(html) {
                expect(html).to.eql('<div prefix-class="wow">OMG</div>');
            });
    });


    it('should process tag selectors and skip empty attrs', function () {
        var options = { 'div': prefix },
            html = '<div>OMG</div><p>block</p><div>OMG2</div>',
            expectedHtml = '<div>OMG</div><p>block</p>' +
                           '<div>OMG2</div>';

        return pluginProcess(options, html)
            .then(function(html) {
                expect(html).to.eql(expectedHtml);
            });
    });

    it('should process other match helper and skip non class attrs', function () {
        var options = { 'p#wow': prefix },
            html = '<div id="id">OMG</div><p id="wow">block</p><div>OMG2</div>',
            expectedHtml = '<div id="id">OMG</div><p id="wow">block</p>' +
                           '<div>OMG2</div>';

        return pluginProcess(options, html)
            .then(function(html) {
                expect(html).to.eql(expectedHtml);
            });
    });
});


function pluginProcess(options, html) {
    return posthtml()
        .use(renameTags(options))
        .process(html)
        .then(function (result) {
            return result.html;
        });
}
