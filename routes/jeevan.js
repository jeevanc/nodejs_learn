var express = require('express');
var router = express.Router();
var request = require('request');
var osmtogeojson = require('osmtogeojson');

router.get('/api/v1/:type', function(req, res, next) {

  function apiQuery(type) {
    var url = `http://www.overpass-api.de/api/interpreter?data=
    [out:json][timeout:25];
    (node["amenity"="${type}"]
      (27.662548575810682,85.25751113891602,27.756772707469466,85.38625717163086);
    );
    (way["amenity"="${type}"]
      (27.662548575810682,85.25751113891602,27.756772707469466,85.38625717163086);
    );
    out body;
    >;
    out skel qt; `
    return url;
  }

  request(apiQuery(req.params.type), function(error, response, body) {
    if (response.statusCode == 200) {
      var response = JSON.parse(response.body);
      var data = osmtogeojson(response);
      res.json(data);
    }
  });
});

module.exports = router;
