module.exports = function (renamer) {
    return function renameAttrs(tree) {
      if (typeof renamer !== 'function') {
        return tree;
      }
      tree.walk(function(node) {
        const attrs = Object.keys(node.attrs);
        node.attrs = attrs.reduce((acc, key) => (
          Object.assign(acc, { [renamer(key, node.attrs[key])]: node.attrs[key] })
        ), {});
        return node;
      });
    };
};
