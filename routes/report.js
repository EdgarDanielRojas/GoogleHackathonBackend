var express = require('express');
var router = express.Router();
const ATMController = require('../controller/ATMController')
var multer              = require('multer');
import MulterGoogleCloudStorage from 'multer-google-storage';

const formUp = multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 15*1024*1024
  }
});

/* GET home page. */
router.post('/reportarCajero',formUp.any().fields([{name:'atmImage',maxCount:1},{name:'atmInfo',maxCount:1}]),ATMController.createReport);



module.exports = router;
