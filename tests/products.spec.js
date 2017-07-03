const {expect} = require('chai');

const config = require('../src/config');
const server = require('./index');
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
