const { expect } = require('chai');

const routes = require('../src/routes');

describe('Routes', () => {
  it('should generate routes with prefix and version', () => {
    expect(routes[0].path).to.include('/api/v1/');
  });
});
