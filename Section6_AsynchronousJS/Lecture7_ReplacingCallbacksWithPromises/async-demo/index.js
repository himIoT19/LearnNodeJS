console.log('Before');

getUser(1, (user) => {
    console.log('User:', user);
    // Get the repositories
    getRepositories(user.gitHubUsername, (repos) => {
        console.log('Repositories:', repos);
        // Get the repository Commits
        getCommits(repos[0], (commits) => {
            console.log(commits);
        })
    })
});

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
            console.log('Calling gitHub API...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}

// Get commits for repository
function getCommits(repos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling Github API for getting commits...');
            resolve(['commit1', 'commit2', 'commit3']);
        });
    });
}