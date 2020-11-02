const Joi = require('joi');
const express = require('express');
const router = express.Router();

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
    { id: 4, name: 'course4' }
];

// GET/READ all courses
router.get('/', (req, res) => {
    res.send(courses);
})

// GET/READ a particular course using ID
router.get('/:id', (req, res) => {
    // Look up the course
    // If not exists, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('The course with the given ID was not found');
    }
    res.send(course);
})

// CREATE/POST new course
router.post('/', (req, res) => {
    // Object destructor used for above "result"
    const { error } = validateCourse(req.body);

    if (error) {
        // 400 Bad Request
        return res.status(400).send(error.details[0].message);
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name     // to parse the JSON obeject data is not included in express
    };                          // so, "router.use(express.json())" is used
    // push it into the array
    courses.push(course);
    // finally response in the request body
    res.send(course);
})

// PUT/UPDATE a particular course using ID
router.put('/:id', (req, res) => {
    // Look up the course
    // If not exists, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('The course with the given ID was not found');
    }

    // Validate
    // If invalid, return 400 - Bad Request
    // const result = validateCourse(req.body);

    // if (result.error) {
    //     // 400 Bad Request
    //     res.status(400).send(result.error.details[0].message);
    //     return;
    // }

    // Object destructor used for above "result"
    const { error } = validateCourse(req.body);

    if (error) {
        // 400 Bad Request
        return res.status(400).send(error.details[0].message);
    }

    // Update course
    course.name = req.body.name;
    res.send(course);
    // Return the updated course
})

// DELETE a particular course using ID
router.delete('/:id', async (req, res) => {
    // Lookup the course
    // Not exists, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('The course with the given ID was not found');
    }

    // Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    // Return the same code
    res.send(course);
})

// function for schema validate
function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })

    return schema.validate(course);
}

module.exports = router;