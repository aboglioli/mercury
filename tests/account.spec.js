const { expect } = require('chai');

const config = require('../src/config');
const {addAdminAccount} = require('./utils');
const [_, server] = require('../index');
const UserSchema = require('../src/schemas/user');
const User = require('../src/resources/users/models');
const r = require('./request')(server);

describe('Account', () => {
  beforeEach((done) => {
    UserSchema.remove({}, () => {
      User.create({
        name: 'Admin',
        email: 'admin@admin.com',
        password: '123456',
        scope: ['admin']
      }).then(() => done());
    });
  });

	it('POST /account/login', (done) => {
    r.post('account/login')
      .send({email: 'admin@admin.com', password: '123456'})
      .expect(200)
      .end((err ,res) => {
        expect(res.body.authToken).to.not.be.undefined;
        expect(res.body.authToken.length > 20).to.equal(true);
		    done(err);
      });
	});

	it('POST /account/register', (done) => {
    r.post('account/register')
      .send({name: 'Test', email: 'test@test.com', password: 'test123'})
      .expect(201)
      .end((err ,res) => {
        if(err) {
          done(err);
        } else {
          r.post('account/login')
            .send({email: 'test@test.com', password: 'test123'})
            .expect(200)
            .end((err ,res) => {
              expect(res.body.authToken).to.not.be.undefined;
              expect(res.body.authToken.length > 20).to.equal(true);
		          done(err);
            });
        }
      });
	});
});
