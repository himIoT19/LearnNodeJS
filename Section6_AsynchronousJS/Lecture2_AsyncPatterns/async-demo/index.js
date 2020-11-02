console.log('Before');
const userOne = getUser(1);
console.log(userOne);   // returns 1, but we don't want that
console.log('After');

/* Deals with Asynchronous JS */
// Callbacks
// Promises
// Async/await

function getUser(id) {
    setTimeout(() => {
        console.log('Reading a user from database...');
        return { id: id, gitHubUsername: 'hinIoT19' };
    }, 2000);   // function will execute after 2 sec, but the below code line will execute.

    return 1;
}