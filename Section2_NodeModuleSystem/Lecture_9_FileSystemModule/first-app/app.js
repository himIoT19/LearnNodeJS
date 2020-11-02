
const fs = require('fs');

/* Load all the files inside the current directory */
// const files = fs.readdirSync('./');

/* Output */
// console.log(`${files}`) // String
// console.log(files)  // Its an Array of String


/* 1. "function": Is a call back function taking two arguments(error, result) */
// fs.readdir('./', function (err, files) {
//     if (err) {
//         console.log('Error', err);
//     }
//     else {
//         console.log('Result', files);
//     }
// })

/* 2. Second to represent the 1 one */
fs.readdir('./', (err, files) => {
    if (err) {
        console.log('Error', err);
    }
    else {
        console.log('Result', files);
    }
})