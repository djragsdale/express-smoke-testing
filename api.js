'use strict';

const express = require('express');
const faker = require('faker');


const data = {
  companies: (new Array(50)).fill(undefined).map((val, idx) => ({
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

module.exports = router;
