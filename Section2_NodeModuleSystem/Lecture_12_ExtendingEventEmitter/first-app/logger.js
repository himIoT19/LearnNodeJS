// Class
const EventEmitter = require('events');

var url = 'https://mylogger.io/log';

class Logger extends EventEmitter {

    // function
    log(message) {
        // Send an HTTP request
        console.log(message);

        // Raise an event(event name: 'messageLogged') (with event arguments('id', and 'url'): inside object => {})
        this.emit('messageLogged', { id: 1, 'url': 'http://' })
    }
}

module.exports = Logger;