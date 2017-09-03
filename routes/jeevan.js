var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var test = {
          "Name": "Jeevan",
          "Location": "balaju"
      }
  res.json(test);
});

module.exports = router;
