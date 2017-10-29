var config = require('./config.json');
var request = require('request');

function GetAutocompleteController() {
}

function getAutocompleteController(req, res, next) {
  if (!req.query.search) {
    res.status(200).json({});
  } else {
    var apiKey = config.apiKey;
    var apiVersion = config.apiVersion;
    var url = config.apiUrl + "/suggest?suggesterName=sg&$orderby=name&api-version=" + apiVersion + "&search=" + req.query.search;
       
    var options = {
      url: url,
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json; charset=utf-8'
      }
    };
  
    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.status(200).send(body);
      }
      else {
        res.status(500).send({ error: 'getAutocompleteController: something blew up in ' + url});
        console.log(error, response);
      }
    })
  }
}


GetAutocompleteController.prototype = {
  get: getAutocompleteController
};

var getAutocompleteController = new GetAutocompleteController();

module.exports = getAutocompleteController;
