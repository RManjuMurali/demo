var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    name: 'M.Maruthavalli',
    email: 'manju@01gmail.com',
    contact: '6383216628',
    fatherName: 'M.Murali',
    dob:'10.07.2000',
    age:22,
    bloodGroup: 'O+' 
  } );
});


module.exports = router;
