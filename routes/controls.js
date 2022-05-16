const path = require('path');

const express = require('express');
const njwt = require('njwt');
const secureRandom = require('secure-random');

const rootDir = require('../utils/path');

const router = express.Router();

var token = '';

// Navigates to the control page
router.get('/controls', (req, res, next) => {
    res.sendFile(path.join(rootDir, './views/controls.html'));
});

// Generates JWT and redirects on 'login'
router.post('/auth-login', (req, res, next) => {
    var signingKey = secureRandom(256, { type: 'Buffer' });
    var claims = {
        iss: "wijmo-weavy-hackathon",
        sub: req.body.username,
    }
    var jwt = njwt.create(claims, signingKey);
    jwt.setExpiration(new Date().getTime() + (60*60*1000));
    token = jwt.compact();
    res.redirect('/controls');
});

// Returns the JWT generated
router.get('/token', (req, res, next) => {
    res.send(token);
});

module.exports = router;