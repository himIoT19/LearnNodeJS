console.log('Before');
getUser(1, getRepositories);

// getUser(1, (user) => {
//     console.log('User:', user);

//     // Get the repositories
//     getRepositories(user.gitHubUsername, (repos) => {
//         console.log('Repositories:', repos);
//         // Get the repository Commits
//         getCommits(repos[1], (commits) => {
//             console.log(`Commits for ${repos[1]}: ${commits}`);
//         })
//     })
// });

console.log('After');

// 3. Named function
function getRepositories(user) {
    getRepositories(user.gitHubUsername, getCommits);
}
/* Named function to rescue from Callback Hell */
// 1. Named function 
function getCommits(repos) {
    getCommits(repos, displayCommits);
}

// 2. Named function
function displayCommits(commits) {
    console.log(commits);
}

// Get Github user information
function getUser(id, callback) {
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

// Get Github repo commits
function getCommits(repo, callback) {
    setTimeout(() => {
        console.log('Calling gitHub API for commits...');
        callback(['commit1']);
    }, 2000);
}