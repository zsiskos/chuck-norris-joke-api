var express = require('express');
var router = express.Router();
const chuckCtrl = require('../controllers/index')

router.get('/', chuckCtrl.getJoke);


module.exports = router;

