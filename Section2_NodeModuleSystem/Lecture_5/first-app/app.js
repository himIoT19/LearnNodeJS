
/* 1.To import any module we use: require("path of module") */
// require('./logger.js');

/* 2. Imported object */
// var logger = require('./logger');

/* 3. Imported function */
// var log = require('./logger');

/* 4. When accidently we change/reset this object('logger') value then we get error at Compiletime instead of Runtime  */
// const logger = require('./logger');
const log = require('./logger');

/* Accidently changed values for object, function, variable, etc */
// logger = 1; // TypeError: Assignment to constant variable.
// log = 1;     // TypeError: Assignment to constant variable.

/* Check what the 'logger' and the 'log' is */
// console.log(logger);
console.log(log);


// logger.log('message');
log('message');

/* CHeck what is inside the main module is */
// console.log(module);