var express = require('express');
var router = express.Router();
const ATMController = require('../controller/ATMController')
var multer              = require('multer');
var formUp = multer({dest:'./temp'});
/* GET home page. */
router.post('/reportarCajero',formUp.fields([{name:'atmImage',maxCount:1},{name:'atmInfo',maxCount:1}]),ATMController.createReport);



module.exports = router;