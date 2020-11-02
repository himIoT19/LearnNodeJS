
// Class
const EventEmitter = require('events');

// Object
const myEmitter = new EventEmitter();

// Register a listener
myEmitter.addListener('messageLogged', (arg) => {   // Listener function(arrow function: '=>') can take event arguments as: arg/e/eventArg
    console.log('Listener called with event arguments: ', arg);
});

// Register a listener for logging event
myEmitter.on('loggerMessage', (eventArg) => {
    console.log('Listener called with event logging arguments: ', eventArg.message);
});

// Raise an event(event name: 'messageLogged') (with event arguments('id', and 'url'): inside object => {})
myEmitter.emit('messageLogged', { id: 1, 'url': 'http://' })

// Raise an event for logging
myEmitter.emit('loggerMessage', { id: 2, 'message': 'this a logger message' });