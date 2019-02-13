const removeLastElementFromArray = require('./src/removeLastElementFromArray');
const removeFileExtension = require('./src/removeFileExtension');
const indexImport = require('./index');

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

//
// Remove file extension
//
test('Remove file extension of file.ext', () => {
  expect(removeFileExtension('file.ext')).toBe('file');
});

test('Remove file extension of file.something.ext', () => {
  expect(removeFileExtension('file.something.ext')).toBe('file.something');
});

test('Remove file extension of file.ext with extensions ["ext"]', () => {
  expect(removeFileExtension('file.ext', true, ['ext'])).toBe('file');
});

test('Remove file extension of file.ext with extensions []', () => {
  expect(removeFileExtension('file.ext', true, [])).toBe('file.ext');
});

//
// Import index
//
test('Remove file extension of file.ext', () => {
  expect(indexImport('file.ext')).toBe('file');
});
