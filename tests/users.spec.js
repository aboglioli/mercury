const { expect } = require('chai');

const config = require('../src/config');
const [_, server] = require('../index');

const r = require('./request')(server);

describe('Users', () => {
  let authToken;

  before((done) => {
    r.get('setup')
      .expect(201)
      .end((err ,res) => {
        if(err) {
          done(err);
        } else {
          const admin = res.body.user;
          expect(admin.email).to.equal('admin@admin.com');
          expect(admin.scope).to.deep.equal(['admin']);

          r.post('account/login')
            .send({email: 'admin@admin.com', password: '123456'})
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
    r.get('users')
      .set('Authorization', adminToken)
      .expect(200)
      .end((err ,res) => {
        if(err) {
          done(err);
        } else {
          console.log(res.body);
          expect(res.body.length > 0).to.be.true;
          done(err);
        }
      });
	});

});
