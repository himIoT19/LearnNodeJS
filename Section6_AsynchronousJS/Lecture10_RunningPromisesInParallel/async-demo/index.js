p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve(1);
        // reject(new Error('because something failed.'));
    }, 2000);
});

p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    }, 2000);
});

// Returns an array of resolve async operations.
// Promise.all([p1, p2])
//     .then(res => console.log(res))
//     .catch(err => console.log('Error', err.message));

/* Note: If any promise is rejected, then the final Promise return is Rejected one(not the resolved one). */


Promise.race([p1, p2])
    .then(res => console.log(res))
    .catch(err => console.log('Error', err.message));
/* Note: Here the result is not an array, the value of the first fulfilled promise is the result(resolved) */