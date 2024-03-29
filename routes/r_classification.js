const express = require('express');
const router = express.Router();

const classificationController = require('../app/controllers/c_classification');

router.get('/', classificationController.index);
router.post('/exec', classificationController.exec);


module.exports = router;