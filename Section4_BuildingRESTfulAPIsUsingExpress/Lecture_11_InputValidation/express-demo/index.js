
// This module('joi') is a class
const Joi = require('joi');
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
    // define schema joi@13.1.0
    // const schema = {
    //     name: Joi.string().min(3).required()
    // };

    // Define schema joi@17.2.1
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })

    // returns an object joi@13.1.0
    // const result = Joi.validate(req.body, schema);

    // Returns an object joi@17.2.1
    const result = schema.validate(req.body);

    console.log("Result", result);

    if (result.error) {  // TODO: Replace this using "joi" npm package
        // 400 Bad Request
        res.status(400).send(result.error.details[0].message);
        return;
    }

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
