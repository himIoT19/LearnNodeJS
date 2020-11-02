// var x = ;   // This syntactical error must be in first line

console.log(__filename);
console.log(__dirname);

var url = 'http://mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message);
}

module.exports = log;


/* The wrapper function("function"): Does the actual task which is written in above lines */
// (function (exports, require, module, __filename, __dirname) {

//     var url = 'http://mylogger.io/log';

//     function log(message) {
//         // Send an HTTP request
//         console.log(message);
//     }

//     module.exports = log;

// exports.log = log;
// module.exports.log = log;

// exports = log;   
/* can't be used with "module.exports = log;" because "exports" => "module.exports" */

// })