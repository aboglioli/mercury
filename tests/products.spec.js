const { expect } = require('chai');
const request = require('supertest');

const config = require('../src/config');
const [_, server] = require('../index');

describe('Products', () => {
  before((done) => {
    done();
  });

	it('GET /products', (done) => {
    request(server.listener)
      .get('/api/v1/products')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err ,res) => {
        done(err);
      });
	});

});
