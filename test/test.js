const posthtml = require('posthtml'),
    camelcase = require('camelcase'),
    expect = require('chai').expect,
    renameTags = require('..');

const camelize = name => camelcase(name);

describe('Plugin', function() {

    it('should process', function() {
        var html = '<div prefix-class="wow">OMG</div>';

        return pluginProcess(camelize, html)
            .then(function(html) {
                expect(html).to.eql('<div prefixClass="wow">OMG</div>');
            });
    });


    it('should skip empty attrs', function () {
        var html = '<div>OMG</div><p>block</p><div>OMG2</div>',
            expectedHtml = '<div>OMG</div><p>block</p>' +
                           '<div>OMG2</div>';

        return pluginProcess(camelize, html)
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
