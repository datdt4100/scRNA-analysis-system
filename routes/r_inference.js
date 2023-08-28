const express = require('express');
const router = express.Router();

const inferenceController = require('../app/controllers/c_inference');

router.get('/', inferenceController.index);
router.post('/exec', inferenceController.exec);


module.exports = router;