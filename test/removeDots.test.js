const removeDots = require('../src/removeDots');

//
// Remove last element from array
//
test('Remove dots from string', () => {
  expect(removeDots('string')).toBe('string');
});

test('Remove dots from .string', () => {
  expect(removeDots('.string')).toBe('string');
});

test('Remove dots from string.', () => {
  expect(removeDots('string.')).toBe('string');
});

test('Remove dots from str.ing', () => {
  expect(removeDots('str.ing')).toBe('string');
});

test('Remove dots from .str.ing.', () => {
  expect(removeDots('.str.ing.')).toBe('string');
});

test('Remove dots from .s.t.r.i.n.g.', () => {
  expect(removeDots('.s.t.r.i.n.g.')).toBe('string');
});

test('Remove dots from ..string', () => {
  expect(removeDots('..string')).toBe('string');
});
