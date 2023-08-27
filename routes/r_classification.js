const express = require('express');
const router = express.Router();

const classificationController = require('../app/controllers/c_classification');

router.get('/', classificationController.index);


module.exports = router;