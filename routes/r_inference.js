const express = require('express');
const router = express.Router();

const inferenceController = require('../app/controllers/c_inference');

router.get('/', inferenceController.index);


module.exports = router;