var _ = require('underscore');

/* How Node resolves a module ? */
// 1. Core module
// 2. File or Folder
// 3. node_modules(3rd party modules installed)

var result = _.contains([1, 2, 3], 2);

console.log(result)