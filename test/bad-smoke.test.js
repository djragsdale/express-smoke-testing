'use strict';

const request = require('supertest');
const app = require('../app');

// The purpose of a smoke test is to turn the thing on and make sure it doesn't catch on fire.
// This isn't a smoke test because it doesn't hit our real server.
describe('GET /', () => {
  it('serves homepage', () => {
    return request(app)
      .get('/')
      .expect(200);
  });
});
