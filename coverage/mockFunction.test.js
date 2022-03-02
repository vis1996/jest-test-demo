const mockFunction = jest.fn((x) => 42 + x);
const emptyFunction = jest.fn();

test('mockFunction pass', () => {
  expect(mockFunction(2)).toBe(44);
});

test('mockFunction fail', () => {
  expect(mockFunction(2)).toBe(40);
});

test('emptyFunction fail', () => {
  expect(emptyFunction()).toBeUndefined();
});
