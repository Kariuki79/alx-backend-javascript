// __tests__/0-add.test.js
const add = require('../0-add');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 1.1 + 2.2 to equal 3.3', () => {
  expect(add(1.1, 2.2)).toBeCloseTo(3.3);
});

