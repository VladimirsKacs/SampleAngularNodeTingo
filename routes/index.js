var express = require('express');
var router = express.Router();


//router.get('/:file', function(req, res, next) {
//  res.sendfile('./Angulars/'+req.params.file);
//});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('./public/Angulars/index.html');
});

module.exports = router;
