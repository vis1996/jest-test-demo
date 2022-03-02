const calculate = require('./functionTest');

test('adds 1 + 2 to equal 3', () => {
  expect(calculate.sum(1, 2)).toBe(3);
});

test('multiply 2 * 2 to equal 4', () => {
  expect(calculate.multiply(2, 2)).toBe(4);
});

test('division 6 / 2 to equal 3', () => {
  expect(calculate.division(6, 2)).toBe(3);
});

test('check undefined', () => {
  expect(calculate.toBeUndefined()).toBeUndefined();
});

test('check defined', () => {
  expect(calculate.division(6, 2)).toBeDefined();
});

test('check toBeTruthy', () => {
  expect(calculate.division(6, -1)).toBeTruthy();
});

test('check toBeTrue', () => {
  expect(calculate.toBeTrue()).toBeTruthy();
});
