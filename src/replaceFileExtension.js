const removeFileExtension = require('./removeFileExtension');
const removeDots = require('./removeDots');

// Replace a file extension
// Parameters
// • filename, datatype: string
// • newExtension, datatype: string
// replaceFileExtension('filename.ext', 'next');
// => 'filename.next'
module.exports = (filename, newExtension) => `${removeFileExtension(filename)}.${removeDots(newExtension)}`;
