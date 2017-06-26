const { expect } = require('chai');
const { buildRoutes } = require('../src/utils/routes');

const routes = require('../src/routes');

describe('Utils', () => {
  describe('Routes', () => {
    it('should generate routes with prefix and version', () => {
      expect(routes[0].path).to.include('/api/v1/');
    });

    it('should buildRoutes()', () => {
      const endpoints = buildRoutes({prefix: 'prefix', version: 'version'}, {
        hello: [{
          path: ''
        }]
      });

      expect(endpoints[0].path).to.equal('/prefix/version/hello');
      expect(endpoints[0].path).to.not.equal('/prefix/version/hello/');
    });
  });
});
