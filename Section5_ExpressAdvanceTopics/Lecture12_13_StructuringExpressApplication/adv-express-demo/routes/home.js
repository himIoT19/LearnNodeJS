const express = require('express');
const router = express.Router();

// Define a route 
// '/': path/url and  callback: is also called route-handler function
router.get('/', (req, res) => {
    res.send('Hello');
});


module.exports = router;