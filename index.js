const matchHelper = require('posthtml-match-helper');

module.exports = function (options) {
    options = options || {};

    return function renameAttrs(tree) {
        var keys = Object.keys(options);
        var matchers = keys.map(matchHelper);
        keys.forEach(function(key, i) {
            tree.match(matchers[i], function(node) {
                const renamer = options[key];
                if (typeof renamer !== 'function') {
                  return node;
                }

                const attrs = Object.keys(node.attrs);
                node.attrs = attrs.reduce((acc, key) => (
                  Object.assign(acc, { [renamer(key, node.attrs[key])]: node.attrs[key] })
                ), {});
                return node;
            });
        });
    };
};
