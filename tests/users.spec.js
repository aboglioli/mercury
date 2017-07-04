const {expect} = require('chai');

const config = require('../src/config');
const server = require('./index');
const UserSchema = require('../src/schemas/user');
const User = require('../src/resources/users/models');
const r = require('./request')(server);

describe('Users', () => {
  let authToken;

  beforeEach((done) => {
    UserSchema.remove({}, () => {
      User.create({
        name: 'Admin',
        email: 'admin@admin.com',
        password: '123456',
        scope: ['admin']
      }).then(() => {
        r.post('account/login')
          .send({email: 'admin@admin.com', password: '123456'})
          .expect(200)
          .end((err ,res) => {
            expect(res.body.authToken).to.not.be.undefined;
            expect(res.body.authToken.length > 20).to.equal(true);

            adminToken = res.body.authToken;

		        done(err);
          });
      });
    });
  });

	it('GET /users', (done) => {
    r.get('users')
      .set('Authorization', adminToken)
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
