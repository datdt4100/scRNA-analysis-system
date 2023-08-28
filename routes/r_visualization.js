const express = require('express');
const router = express.Router();

const visualizationController = require('../app/controllers/c_visualization');

router.get('/', visualizationController.index);
router.post('/result', visualizationController.visualize)


module.exports = router;