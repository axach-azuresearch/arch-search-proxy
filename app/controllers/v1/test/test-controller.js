var request = require('request');

function TestController() {
}

function get(req, res, next) {
  if (!req.query.search) {
    res.status(200).json({});
  }
  else {
    var index = 'arch-search';
    var url = 'https://xxx/indexes/' + 
        index +
        "/docs?search=" +
        req.query.search + 
        "&api-version=2016-09-01";

    var options = {
      url: url,
      headers: {
        'api-key': 'xxx'
      }
    };
    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        //console.log(body) // Show the HTML for the Google homepage.
        res.status(200).send(body);
      }
      else {
        console.log(error, response);
        res.status(500).send({ error: 'something blew up' });
      }
    })
  }
}

TestController.prototype = {
  get: get
};

var testController = new TestController();

module.exports = testController;
