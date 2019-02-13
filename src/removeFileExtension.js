const removeLastElementFromArray = require('./removeLastElementFromArray');
const defaultExtensions = require('./defaultExtensions');

// Params:
// • filename, datatype: string
// • excludeSpecifiedExtentions (optional), datatype: boolean
//   set to true, only extensions specified in extensions
//   are removed from the filename
// • extensions (optional), datatype: array with strings
module.exports = (filename, excludeSpecifiedExtentions = false, extensions = defaultExtensions) => {
  const nameSplit = filename.split('.'); // 'filename.pdf' => ['filename', 'js']
  const lastIndex = nameSplit.length - 1; // lastIndex => 1
  const extension = nameSplit[lastIndex]; // extension => 'js'
  if (excludeSpecifiedExtentions) {
    if (extensions.includes(extension)) { // if ['js', 'json', 'txt', 'pdf'] includes 'js'
      return removeLastElementFromArray(nameSplit).join('.'); // return 'filename'
    }
    return filename;
  }
  return removeLastElementFromArray(nameSplit).join('.');
};
