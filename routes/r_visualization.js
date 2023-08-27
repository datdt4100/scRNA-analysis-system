const express = require('express');
const router = express.Router();

const visualizationController = require('../app/controllers/c_visualization');

router.get('/', visualizationController.index);


module.exports = router;