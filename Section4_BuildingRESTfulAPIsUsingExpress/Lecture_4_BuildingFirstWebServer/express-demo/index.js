const express = require('express');
// is our application
const app = express();

// Define a route 
// '/': path/url and  callback: is also called route-handler
app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
})

app.listen(3000, () => console.log('Listening on port 3000...'))
