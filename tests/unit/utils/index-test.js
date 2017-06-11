import so from 'symbol-observable';
import sop from 'symbol-observable/ponyfill';
import { module, test } from 'qunit';

module('Unit | Utility | index');

test('it works', function(assert) {
  assert.equal(typeof so, 'string');
  assert.equal(typeof sop, 'function');
});
