// Custom Middleware Function
function authenticate(req, res, next) {
    console.log('Authentication...');   // req.body
    next(); // application will not hang
}

module.exports = authenticate;