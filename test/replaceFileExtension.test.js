const fileExtensions = require('../index');

//
// Replace file extension
//
test('Replace file extension of file.ext to file.next', () => {
  expect(fileExtensions.replace('file.ext', 'next')).toBe('file.next');
});

test('Replace file extension of file.something.ext to file.something.next', () => {
  expect(fileExtensions.replace('file.something.ext', 'next')).toBe('file.something.next');
});

test('Replace file extension of file.ext to file.next', () => {
  expect(fileExtensions.replace('file.ext', '.next')).toBe('file.next');
});

test('Replace file extension of file.something.ext to file.something.next', () => {
  expect(fileExtensions.replace('file.something.ext', '.next')).toBe('file.something.next');
});

test('Replace file extension of file.ext to file.next', () => {
  expect(fileExtensions.replace('file.ext', '..next')).toBe('file.next');
});

test('Replace file extension of file.something.ext to file.something.next', () => {
  expect(fileExtensions.replace('file.something.ext', '..next')).toBe('file.something.next');
});
