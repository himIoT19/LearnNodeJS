
// Class
const EventEmitter = require('events');

// Load logger module(and create an object of custom class)
const Logger = require('./logger');

// Instance of custom class("Logger") defined which extends EventEmitter
const logger = new Logger();

// Register a listener
logger.addListener('messageLogged', (arg) => {   // Listener function(arrow function: '=>') can take event arguments as: arg/e/eventArg
    console.log('Listener called with event arguments: ', arg);
});

logger.log('message'); // The listener will not be called(Why ?).

/*
1. Since in each module if we have EventEmitter class objects they are both different.
2. So, when the event is raised(in 'logger.js') it will not find the registered listeners(in 'app.js').
3. And the callback in registered listener(in 'app.js') will not be called.
*/