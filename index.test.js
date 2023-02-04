import assert from 'node:assert';
import test from 'node:test';
import { isAdult, isAdultInCountry } from './index.js';

test('isAdult is working as expected', () => {
  assert.strictEqual(isAdult(Number.MAX_VALUE), true);
  assert.strictEqual(isAdult(18), true);
  assert.strictEqual(isAdult(19), true);
  assert.strictEqual(isAdult(170), true);
  assert.strictEqual(isAdult(17), false);
  assert.strictEqual(isAdult(16), false);
  assert.strictEqual(isAdult(0), false);
  assert.strictEqual(isAdult(-1), false);
  assert.strictEqual(isAdult(Number.MIN_VALUE), false);
});

test('isAdultInCountry with default fallback is working as expected', () => {
  assert.strictEqual(isAdultInCountry(Number.MAX_VALUE), true);
  assert.strictEqual(isAdultInCountry(18), true);
  assert.strictEqual(isAdultInCountry(19), true);
  assert.strictEqual(isAdultInCountry(170), true);
  assert.strictEqual(isAdultInCountry(17), false);
  assert.strictEqual(isAdultInCountry(16), false);
  assert.strictEqual(isAdultInCountry(0), false);
  assert.strictEqual(isAdultInCountry(-1), false);
  assert.strictEqual(isAdultInCountry(Number.MIN_VALUE), false);
});

test('isAdultInCountry with DEU country is working as expected', () => {
  assert.strictEqual(isAdultInCountry(Number.MAX_VALUE, 'DEU'), true);
  assert.strictEqual(isAdultInCountry(18, 'DEU'), true);
  assert.strictEqual(isAdultInCountry(19, 'DEU'), true);
  assert.strictEqual(isAdultInCountry(170, 'DEU'), true);
  assert.strictEqual(isAdultInCountry(17, 'DEU'), false);
  assert.strictEqual(isAdultInCountry(16, 'DEU'), false);
  assert.strictEqual(isAdultInCountry(0, 'DEU'), false);
  assert.strictEqual(isAdultInCountry(-1, 'DEU'), false);
  assert.strictEqual(isAdultInCountry(Number.MIN_VALUE, 'DEU'), false);
});

test('isAdultInCountry with NPL country is working as expected', () => {
  assert.strictEqual(isAdultInCountry(Number.MAX_VALUE, 'NPL'), true);
  assert.strictEqual(isAdultInCountry(16, 'NPL'), true);
  assert.strictEqual(isAdultInCountry(17, 'NPL'), true);
  assert.strictEqual(isAdultInCountry(170, 'NPL'), true);
  assert.strictEqual(isAdultInCountry(15, 'NPL'), false);
  assert.strictEqual(isAdultInCountry(14, 'NPL'), false);
  assert.strictEqual(isAdultInCountry(0, 'NPL'), false);
  assert.strictEqual(isAdultInCountry(-1, 'NPL'), false);
  assert.strictEqual(isAdultInCountry(Number.MIN_VALUE, 'NPL'), false);
});
