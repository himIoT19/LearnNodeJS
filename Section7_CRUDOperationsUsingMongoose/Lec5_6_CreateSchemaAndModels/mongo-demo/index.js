const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/playground', { useNewUrlParser: true, useUnifiedTopology: true })// it returns a 'Promise'
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Could not connect to MongoDB...', err));


/* Schema */
// Schema Types:  String, Number, Boolean, Date, Array, Buffer, ObjectID
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});


/* Classes and Objects */
// Class => Course
// Object => NodeJS

/* Schema to model(Compile to model) */
const Course = mongoose.model('Course', courseSchema);  // class 
const course = new Course({
    name: 'NodeJS',
    author: 'Mosh Hamedani',
    tags: ['node', 'backend'],
    isPublished: true
});