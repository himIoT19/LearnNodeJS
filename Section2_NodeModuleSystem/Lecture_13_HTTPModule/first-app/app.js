/* HTTP module is used for creating networking applcations */

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World!');
        res.end();
    }

    if (req.url === '/api/v1/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});    // server: is an event emitter

// server.on('connection', (socket) => {
//     console.log('New connection....');
// });

server.listen(3000);

console.log('Listening on port 3000....');

/*
Note: We are not going to use HTTP module because code becomes more complex for each route
Note: Instead we use a framework 'Express': built on the top HTTP module in node.
*/