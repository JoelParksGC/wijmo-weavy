const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

// Routes to the login page
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, './views/login.html'));
});

module.exports = router;