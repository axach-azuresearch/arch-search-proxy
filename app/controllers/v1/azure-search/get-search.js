var request = require('request');

function GetSearchController() {
}

function getSearchController(req, res, next) {
  if (!req.query.search) {
    res.status(200).json({});
  } else {
    var apiKey = 'xxx';
    var apiVersion = '2016-09-01';
    var url = 'https://xxx.../docs' + '?api-version=' + apiVersion + '&$count=true' + '&searchMode=all' + 
                '&search=' + req.query.search + 
                '&$filter=' + req.query.$filter;
    
    if (req.query.scoringProfile != undefined) {
      url = url + "&scoringProfile=" + req.query.scoringProfile;
    }
    
    if (req.query.$skip != undefined) {
      url = url + "&$skip=" + req.query.$skip;
    }
  
    console.log("***************************************************************************************");
    console.log("URI FROM CLIENT:");
    console.log("https://arch-search-proxy.azurewebsites.net" + req.originalUrl + " -> ");
    console.log("URI TO SEARCH:");
    console.log(url);
    console.log("***************************************************************************************");
    
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
        console.log("*** REQUEST ***");
        console.log(options);
        console.log("***************************************************************************************");
        console.log("*** RESPONSE ***");
        console.log(body);
      }
      else {
        res.status(500).send({ error: 'getSearchController: something blew up' + url});
        console.log(error, response);
      }
    })
  }
}


GetSearchController.prototype = {
  get: getSearchController
};

var getSearchController = new GetSearchController();

module.exports = getSearchController;
