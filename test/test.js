var posthtml = require('posthtml'),
    expect = require('chai').expect,
    renameTags = require('..');


describe('Plugin', function() {

    it('should process simple class selectors', function() {
        var options = { '.wow': 'span' },
            html = '<div class="wow">OMG</div>';

        return pluginProcess(options, html)
            .then(function(html) {
                expect(html).to.eql('<span class="wow">OMG</span>');
            });
    });


    it('should process tag selectors', function () {
        var options = { 'div': 'span' },
            html = '<div>OMG</div><p>block</p><div>OMG2</div>',
            expectedHtml = '<span>OMG</span><p>block</p>' +
                           '<span>OMG2</span>';

        return pluginProcess(options, html)
            .then(function(html) {
                expect(html).to.eql(expectedHtml);
            });
    });

    it('should process other match helper in keys', function () {
        var options = { 'p#wow': 'span' },
            html = '<div id="id">OMG</div><p id="wow">block</p><div>OMG2</div>',
            expectedHtml = '<div id="id">OMG</div><span id="wow">block</span>' +
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
