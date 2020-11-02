
const EventEmitter = require('events');

// Instance(object) of the EventEmitter class
const myEmitter = new EventEmitter();

// Register a listener("addListerner" == "on")
myEmitter.on('messageLogged', () => {
    console.log('Listener called')
})

// Raise an event
myEmitter.emit('messageLogged');
/* When we raise an event callback/listener was called. But the order was important here(what it means)
Ques.What if we register listener after emit method what will happen?
Ans. Emit method iterates over all registered listeners and call them synchronously.
 */