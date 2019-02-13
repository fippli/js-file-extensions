# Remove File Extension
Remove file extensions JavaScript.

## Usage
```JavaScript
const fileExtensions = require('@fippli/js-file-extensions');
// or
import fileExtensions from '@fippli/js-file-extensions';
```
### Remove
```JavaScript
fileExtensions.remove('filename.ext')
// => 'filename'
```
### Replace
```JavaScript
fileExtensions.replace('filename.ext', 'next')
// => 'filename.next'
```
