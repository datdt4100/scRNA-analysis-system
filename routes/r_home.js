const express = require('express');
const router = express.Router();

const homeController = require('../app/controllers/c_home');

router.get('/', homeController.index)

module.exports = router;