
describe('TestService Tests', function() {

  var testService;

  beforeEach(function() {
    testService = require('../../../../app/services/test/test-service');
  });

  describe('lookupTest', function() {

    it('should be a function', function(done) {
      expect(testService.lookupTest).to.be.a('function');
      done();
    });

  });
});
