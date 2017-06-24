const { expect } = require('chai');
const request = require('supertest');

const config = require('../src/config');
const server = require('../index');

describe('Account', () => {
  before((done) => {
    request(server.listener)
      .get('/api/v1/setup')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err ,res) => {
        expect(res.body.email).to.equal('admin@admin.com');
        expect(res.body.password.length > 10).to.equal(true);
        expect(res.body.scope).to.deep.equal(['admin']);
		    done(err);
      });
  });
	it('GET /account/login', (done) => {
    request(server.listener)
      .post('/api/v1/account/login')
      .send({email: 'admin@admin.com', password: '123456'})
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err ,res) => {
        expect(res.body.authToken).to.not.be.undefined;
        expect(res.body.authToken.length > 20).to.equal(true);
		    done(err);
      });
	});
});