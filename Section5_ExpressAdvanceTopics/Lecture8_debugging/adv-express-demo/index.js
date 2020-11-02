const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const config = require('config');
const morgan = require('morgan');
const express = require('express');
// is our application
const app = express();

// Check production/development/etc
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    // console.log('Morgan enabled');   // replaced with debugger
    startupDebugger('Morgan enabled...');
}

// Db work
dbDebugger('Connected to database...');

// Environment variable => PORT
const port = process.env.PORT || 3000;  // process is a global object
app.listen(port, () => console.log(`Listening on port ${port}...`))