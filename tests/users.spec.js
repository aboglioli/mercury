const {expect} = require('chai');

const [server, utils] = require('./index');
const User = require('../src/resources/users/models');

describe('Users', () => {
  let adminToken;
  let user;

  before(async () => {
    await User.removeAll();

    await User.create({
      name: 'Admin',
      email: 'admin@admin.com',
      password: '123456',
      scope: ['admin']
    });

    user = await User.create({
      name: 'User',
      email: 'user@user.com',
      password: 'user1'
    });

    adminToken = await utils.login('admin@admin.com', '123456');
  });

	it('GET /users', (done) => {
    utils.request.get('users')
      .set('Authorization', adminToken)
      .expect(200)
      .end((err ,res) => {
        expect(res.body.length === 2).to.be.true;
        done(err);
      });
	});

	it('GET /users/{userId}', (done) => {
    utils.request.get('users/' + user._id)
      .set('Authorization', adminToken)
      .expect(200)
      .end((err ,res) => {
        expect(String(res.body._id)).to.equal(String(user._id));
        expect(res.body).to.have.all.keys('_id', 'name', 'email', 'scope', 'created_at', 'updated_at');
        expect(res.body).to.not.have.all.keys('password');
        done(err);
      });
	});

	it('POST /users', (done) => {
    utils.request.get('users/' + user._id)
      .set('Authorization', adminToken)
      .expect(200)
      .end((err ,res) => {
        expect(res.body._id).to.equal(String(user._id));
        done(err);
      });
	});

});
