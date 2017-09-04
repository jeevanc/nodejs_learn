var express = require('express');
var router = express.Router();
var request = require('request');
var osmtogeojson = require('osmtogeojson');

router.get('/api/v1/schools', function(req, res, next) {

  var url = 'http://www.overpass-api.de/api/interpreter?data= [out:json][timeout:25];(node["amenity"="bank"](27.662548575810682,85.25751113891602,27.756772707469466,85.38625717163086); ); out body; >; out skel qt; '

  request(url, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.

    if(response.statusCode == 200){
      var response = JSON.parse(response.body);
      var data = osmtogeojson(response);
      res.json(data);
    }

  });
});

module.exports = router;
