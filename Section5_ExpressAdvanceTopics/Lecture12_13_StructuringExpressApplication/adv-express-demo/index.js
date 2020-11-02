const config = require('config');
const helmet = require('helmet');
const morgan = require('morgan');
// This module('joi') is a class
const Joi = require('joi');
const logger = require('./middleware/logger');
const courses = require('./routes/courses');
const home = require('./routes/home');
const authenticator = require('./middleware/authenticator');
const express = require('express');
// is our application
const app = express();

/* Set view engine */
app.set('view engine', 'pug');
app.set('views', './views');    // default

/* Check environments */
// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get('env')}`);

/* 
"express.json()": returns piece of middleware function (app.use use this middleware in the Request Process Pipeline).
 The job of this middleware function is used to read the request and if there is the JSON object in the body of the request it will parse the body of 
 the request into a JSON object and it will set the "req.body" property(At runtime).
 */
app.use(express.json());
/* 
Middleware function: Basically a function that takes a request object and either returns a response to the client or
passes control to an another middleware function. Eg: ROute handler function in "express" is a middleware function.
Request -> Response cycle
*/

app.use(express.urlencoded({ extended: true }));   // result: key1=value&key2=value
// Using '{ extended: true }' we can pass 'arrays' and 'complex objects' using "url-encoded" format.

app.use(express.static('public'));
/* 
(Using this middleware we can serve static content)
put all css, images, and so on inside this folder. 
Note: Static contents are get from root('/') of the url.
*/

// Creating own middleware function
app.use(logger);

// Creating own middleware function
app.use(authenticator);

// Using 3rd-party middleware 'helmet' and 'morgan'
app.use(helmet());

// use courses api
app.use('/api/courses', courses);
app.use('/', home);


// Configurations
console.log('Application name: ' + config.get('name'));
console.log('Mail server: ' + config.get('mail.host'));
console.log('Mail password: ' + config.get('mail.password'));

// Check production/development/etc
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enabled');
}


// Environment variable => PORT
const port = process.env.PORT || 3000;  // process is a global object
app.listen(port, () => console.log(`Listening on port ${port}...`))