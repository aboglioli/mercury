const {expect} = require('chai');

const [server, utils] = require('./index');
const User = require('../src/resources/users/models');

describe('Account', () => {
  before(async () => {
    await User.create({
      name: 'Admin',
      email: 'admin@admin.com',
      password: '123456',
      scope: ['admin']
    });
  });

	it('POST /account/login', (done) => {
    utils.request.post('account/login')
      .send({email: 'admin@admin.com', password: '123456'})
      .expect(200)
      .end((err ,res) => {
        expect(res.body.authToken).to.not.be.undefined;
        expect(res.body.authToken.length > 20).to.equal(true);
		    done(err);
      });
	});

	it('POST /account/register', (done) => {
    utils.request.post('account/register')
      .send({name: 'Test', email: 'test@test.com', password: 'test123'})
      .expect(201)
      .end((err ,res) => {
        if(err) {
          done(err);
        } else {
          utils.request.post('account/login')
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
