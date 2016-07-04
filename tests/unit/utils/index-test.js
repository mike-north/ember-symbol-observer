import so from 'symbol-observable';
import sop from 'symbol-observable/ponyfill';
import { module, test } from 'qunit';

module('Unit | Utility | index');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.ok(so, 'symbol-observable module is present');
  assert.ok(sop, 'symbol-observable/ponyfill module is present');
});
