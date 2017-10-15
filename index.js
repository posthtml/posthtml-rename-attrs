const matchHelper = require('posthtml-match-helper');

module.exports = function (options) {
    options = options || {};

    return function renameTags(tree) {
        var keys = Object.keys(options);
        var matchers = keys.map(matchHelper);
        keys.forEach(function(key, i) {
            tree.match(matchers[i], function(node) {
                node.tag = options[key];
                return node;
            });
        });
    };
};
