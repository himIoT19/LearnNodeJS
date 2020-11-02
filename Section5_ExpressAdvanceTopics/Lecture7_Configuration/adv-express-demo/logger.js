// Custom Middleware function
function log(req, res, next) {
    console.log('Logging...');  // req.body
    next(); // application will not hang
}

module.exports = log;