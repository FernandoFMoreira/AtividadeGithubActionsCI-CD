const { calculate } = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculate('1+2')).toBe(3);
});

test('subtracts 5 - 2 to equal 3', () => {
  expect(calculate('5-2')).toBe(3);
});

test('multiplies 2 * 2 to equal 4', () => {
  expect(calculate('2*2')).toBe(4);
});

test('divides 8 / 2 to equal 4', () => {
  expect(calculate('8/2')).toBe(4);
});

test('divides 2 / 0 to return Error', () => {
  expect(calculate('2/0')).toBe('Error');
});