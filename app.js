'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const api = require('./api');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', api);

app.use(express.static(path.join(__dirname, './public')));

module.exports = app;