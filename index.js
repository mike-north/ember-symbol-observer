/* jshint node: true */
var mergeTrees = require('broccoli-merge-trees');
var stew = require('broccoli-stew');
var path = require('path');

'use strict';

module.exports = {
  name: 'symbol-observable',
  
  treeForAddon: function(tree) {
  	var soPath = path.dirname(require.resolve('symbol-observable/index.js')) + '/es';
    var soTree = stew.find(soPath, {
      include: ['**/*.js']
    });
    var trees = mergeTrees([tree, soTree], {overwrite: true});
  	return this._super.treeForAddon.call(this, trees);
  }
};
