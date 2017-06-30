const { expect } = require('chai');

const config = require('../src/config');
const [_, server] = require('../index');

const r = require('./request')(server);

describe('Account', () => {
  before((done) => {
    r.get('setup')
      .expect(201)
      .end((err ,res) => {
        done(err);
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
