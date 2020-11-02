console.log('Before');

getUser(1, (user) => {
    console.log('User:', user);
    // Get the repositories
    getRepositories(user.gitHubUsername, (repos) => {
        console.log('Repositories:', repos);
    })
});

console.log('After');

// Get Github user information
function getUser(id, /* function */ callback) {
    setTimeout(() => {
        console.log('Reading a user from database...');
        callback({ id: id, gitHubUsername: 'himIoT19' });
    }, 2000);   // function will execute after 2 sec, but the below code line will execute.
}

// Get Github repositories
function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling gitHub API...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}