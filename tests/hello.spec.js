const { expect } = require('chai');
const request = require('supertest');

const config = require('../src/config');
const [_, server] = require('../index');

describe('Hello', () => {
	it('GET /hello', (done) => {
    request(server.listener)
      .get('/api/v1/hello')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err ,res) => {
        expect(res.body).to.deep.equal({hello: 'world'});
		    done(err);
      });
	});
});
