const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const loginRoutes = require('./routes/login');
const controlRoutes = require('./routes/controls');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(loginRoutes);
app.use(controlRoutes);

app.listen(3000);