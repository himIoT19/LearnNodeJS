console.log('Before');
setTimeout(() => {
    console.log('Reading a user from database...')
}, 2000);   // function will execute after 2 sec, but the below code line will execute.
console.log('After');