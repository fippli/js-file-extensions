const fileExtensions = require('../index');

//
// Remove file extension
//
test('Remove file extension of file.ext', () => {
  expect(fileExtensions.remove('file.ext')).toBe('file');
});

test('Remove file extension of file.something.ext', () => {
  expect(fileExtensions.remove('file.something.ext')).toBe('file.something');
});

test('Remove file extension of file.ext with extensions ["ext"]', () => {
  expect(fileExtensions.remove('file.ext', true, ['ext'])).toBe('file');
});

test('Remove file extension of file.ext with extensions []', () => {
  expect(fileExtensions.remove('file.ext', true, [])).toBe('file.ext');
});
