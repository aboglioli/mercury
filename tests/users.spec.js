const {expect} = require('chai');

const [db, server] = require('./index');
const r = require('./request')(server);
const {login} = require('./utils');

describe('Users', () => {
  let adminToken;

  beforeEach(async () => {
    await db.createAdminAccount({
      name: 'Admin',
      email: 'admin@admin.com',
      password: '123456'
    });

    adminToken = await login('admin@admin.com', '123456');
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
