console.log('Before');

// getUser(1, (user) => {
//     console.log('User:', user);
//     // Get the repositories
//     getRepositories(user.gitHubUsername, (repos) => {
//         console.log('Repositories:', repos);
//         // Get the repository Commits
//         getCommits(repos[0], (commits) => {
//             console.log(commits);
//         })
//     })
// });


/* Promise based approach */
// getUser(1)
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('Commits', commits.commit2))
//     .catch(err => console.log('Error', err.message));

/* Async and Await approach */
async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch (err) {
        console.log('Error: ', err.message);
    }

}

displayCommits();


console.log('After');

// Get Github user information
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from database...');
            resolve({ id: id, gitHubUsername: 'himIoT19' });
        }, 2000);   // function will execute after 2 sec, but the below code line will execute.
    });
}

// Get Github repositories
function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling Github API for getting repositories...');
            resolve(['repo1', 'repo2', 'repo3']);
            // reject(new Error('Could not get repositories...')); // to check 'try and catch'
        }, 2000);
    });
}

// Get commits for repository
function getCommits(repos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling Github API for getting commits...');
            resolve({ commit1: ['file11', 'file12', 'file13'], commit2: ['file21', 'file22'] });
        }, 2000);
    });
}