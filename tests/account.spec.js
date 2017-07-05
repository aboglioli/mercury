const {expect} = require('chai');

const [server, utils] = require('./index');
const User = require('../src/resources/users/models');

describe('Account', () => {
  before(async () => {
    await User.removeAll();

    await User.create({
      name: 'Admin',
      email: 'admin@admin.com',
      password: '123456',
      scope: ['admin']
    });

    await User.create({
      name: 'User',
      email: 'user@user.com',
      password: 'user123'
    });
  });

	it('POST /account/login', async () => {
    const res = await utils.request.post('account/login')
      .send({email: 'admin@admin.com', password: '123456'})
      .expect(200);

    expect(res.body.authToken).to.not.be.undefined;
    expect(res.body.authToken.length > 20).to.equal(true);
	});

	it('POST /account/register', async () => {
    let res = await utils.request.post('account/register')
      .send({name: 'Test', email: 'test@test.com', password: 'test123'})
      .expect(201);

    expect(res.body).to.have.keys('_id', 'name','email', 'scope', 'created_at', 'updated_at');

    res = await utils.request.post('account/login')
      .send({email: 'test@test.com', password: '123456'}) // wrong password
      .expect(400);

    expect(res.body.message).to.equal('Invalid credentials');

    res = await utils.request.post('account/login')
      .send({email: 'test@test.com', password: 'test123'})
      .expect(200);

    expect(res.body.authToken).to.not.be.undefined;
    expect(res.body.authToken.length > 20).to.equal(true);
	});
});
