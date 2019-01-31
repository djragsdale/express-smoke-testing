#!/usr/bin/env node
'use strict';

const bodyParser = require('body-parser');
const debug = require('debug')('express-smoke-testing');
const express = require('express');
const faker = require('faker');
const logger = require('morgan');
const path = require('path');

const PORT = process.env.PORT || '3000';

const app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const data = {
  companies: (new Array(3)).fill(undefined).map((val, idx) => ({
    id: idx,
    name: faker.company.companyName(),
  })),
};

const router = express.Router();

router
  .get('/companies', (req, res) => {
    res.status(200).send(data.companies);
  })
  .get('/company/:id', (req, res) => {
    const { id } = req.params;
    if (data.companies[id]) {
      res.status(200).send(data.companies[id]);
    } else {
      res.status(400).end();
    }
  });

app.use('/api', router);
app.use(express.static(path.join(__dirname, './public')));

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));