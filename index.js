/* jshint node: true */
var mergeTrees = require('broccoli-merge-trees');
var replace = require('broccoli-string-replace');
var path = require('path');

('use strict');

module.exports = {
  name: 'symbol-observable',

  treeForAddon: function(tree) {
    var soPath = path.dirname(require.resolve('symbol-observable/es/index.js'));
    var soTree = this.treeGenerator(soPath);
    soTree = replace(soTree, {
      files: ['**/*.js'],
      patterns: [
        {
          match: /from '([^']+)\.js'/g,
          replacement: "from '$1'"
        }
      ]
    });
    var trees = tree ? mergeTrees([tree, soTree]) : soTree;
    return this._super.treeForAddon.call(this, trees);
  }
};
