
describe('TestRepository Tests', function() {

  var testRepository;

  beforeEach(function() {
    testRepository = require('../../../../app/repositories/test/test-repository');
  });

  describe('getTestData()', function() {

    it('should be a function', function(done) {
      expect(testRepository.getTestData).to.be.a('function');
      done();
    });

  });
});
