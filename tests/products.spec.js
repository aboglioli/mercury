const {expect} = require('chai');

const [db, server] = require('./index');
const r = require('./request')(server);

describe('Products', () => {
  before((done) => {
    done();
  });

	it('GET /products', (done) => {
    r.get('products')
      .expect(200)
      .end((err ,res) => {
        done(err);
      });
	});

});
