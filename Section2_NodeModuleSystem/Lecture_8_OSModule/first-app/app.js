
const os = require('os');

var totalMem = os.totalmem();
var freeMem = os.freemem();

// console.log('Total m/m: ' + totalMem);
// console.log('Free m/m: ' + freeMem);

/* Template string */
// (ES6 / ES2015): ECMAScript 6
console.log(`Total Memory: ${totalMem}\nFree Memory: ${freeMem}`);
console.log(`Total Memory: ${totalMem}`);
console.log(`Free Memory: ${freeMem}`);