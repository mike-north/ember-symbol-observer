import so from 'symbol-observable';
import sop from 'symbol-observable/ponyfill';
import { module, test } from 'qunit';

module('Unit | Utility | index');

test('it works', function(assert) {
  assert.ok(['string', 'symbol'].indexOf(typeof so) >= 0);
  assert.equal(typeof sop, 'function');
});
