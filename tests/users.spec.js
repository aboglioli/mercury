
const { expect } = require('chai');
const request = require('supertest');

const config = require('../src/config');
const [dbConnection, server] = require('../index');
dbConnection.connection.dropDatabase();

describe('Users', () => {
  let authToken;

  before((done) => {
    request(server.listener)
      .get('/api/v1/setup')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err ,res) => {
        if(err) {
          done(err);
        } else {
          expect(res.body.email).to.equal('admin@admin.com');
          expect(res.body.password.length > 10).to.equal(true);
          expect(res.body.scope).to.deep.equal(['admin']);

          request(server.listener)
            .post('/api/v1/account/login')
            .send({email: 'admin@admin.com', password: '123456'})
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err ,res) => {
              expect(res.body.authToken).to.not.be.undefined;
              expect(res.body.authToken.length > 20).to.equal(true);

              adminToken = res.body.authToken;

		          done(err);
            });
        }
      });
  });

	it('GET /users', (done) => {
    request(server.listener)
      .get('/api/v1/users')
      .set('Authorization', adminToken)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err ,res) => {
        if(err) {
          done(err);
        } else {
          expect(res.body.length > 0).to.be.true;
          done(err);
        }
      });
	});

});
