const removeLastElementFromArray = require('../src/removeLastElementFromArray');

//
// Remove last element from array
//
test('Remove last element of []', () => {
  expect(removeLastElementFromArray([])).toEqual([]);
});

test('Remove last element of ["a"]', () => {
  expect(removeLastElementFromArray(['a'])).toEqual([]);
});

test('Remove last element of ["a", "b"]', () => {
  expect(removeLastElementFromArray(['a', 'b'])).toEqual(['a']);
});
