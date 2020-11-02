const express = require('express');
// is our application
const app = express();

// "express.json" returns piece of middleware(app.use use this middleware in the request process pipeline)
app.use(express.json());

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
    { id: 4, name: 'course4' }
];

// Define a route 
// '/': path/url and  callback: is also called route-handler function
app.get('/', (req, res) => {
    res.send('Hello World!!!');
})

app.get('/api/courses', (req, res) => {
    res.send(courses);
})

app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name     // to parse the JSON obeject data is not included in express
    };                          // so, "app.use(express.json())" is used
    // push it into the array
    courses.push(course);
    // finally response in the request body
    res.send(course);
})

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found');
    res.send(course);
})

// Environment variable => PORT
const port = process.env.PORT || 3000;  // process is a global object
app.listen(port, () => console.log(`Listening on port ${port}...`))
