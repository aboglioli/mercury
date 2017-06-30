const supertest = require('supertest');

const prefix = '/api/v1';
const httpActions = ['get', 'post', 'put', 'patch'];

function request(server) {
  const r = supertest(server.listener);

  return httpActions.reduce((methods, action) => {
    methods[action] = (endpoint) =>
      r[action](`${prefix}/${endpoint}`)
        .expect('Content-Type', /json/);

    return methods;
  }, {});
}

module.exports = request;
;
