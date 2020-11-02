/* 
    1. 'url' and 'log' they are both scoped to this module or private, they are not visible to outside.
    2. To make it available for outside(app.js) => app_module
*/

/* Variable */
var url = 'http://mylogger.io/log';

/* Function */
function log(message) {
    // Send an htt request
    console.log(message);
}


/* To make the 'log' and 'url' objects available to different/main_module(app.js) */
// module.exports.log = log; // object is available
// module.exports.url = url;
// module.exports.endPoint = url;

/* If we want only the method to available to different/main_module(app.js) */
module.exports = log;