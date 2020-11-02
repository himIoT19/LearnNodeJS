const mongoose = require('mongoose');

/* Connecting mongodb and create a database => "playground" */
mongoose.connect('mongodb://localhost:27017/playground', { useNewUrlParser: true, useUnifiedTopology: true })// it returns a 'Promise'
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Could not connect to MongoDB...', err));
// Collection => Table
// Document => Row in a table

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

async function createCourse() {
    const course = new Course({
        name: 'Python',
        author: 'Himanshu Tewari',
        tags: ['python3', 'basic'],
        isPublished: true
    });

    // Save Course object to database
    const result = await course.save();  // takes some time to save(this method returns a Promise)
    console.log(result);
}

async function getCourses() {
    // logical operators => "or", and "and"

    // const courses = await Course.find();
    // const courses = await Course.find({ author: 'Himanshu Tewari', isPublished: true });
    // Complex query to get only two properties
    const courses = await Course
        // .find({ author: 'Mosh Hamedani', isPublished: true })
        .find()
        .or([{ author: 'Mosh Hamedani' }, { isPublished: true }])
        .and([])
        .limit(10)
        .sort({ name: 1 })      // 1: Ascending Order and -1: Descending Order
        .select({ name: 1, tags: 1 });  // select the properties we want to return
    console.log(courses);
}

// createCourse();
getCourses();