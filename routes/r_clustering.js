const express = require('express');
const router = express.Router();

const clusteringController = require('../app/controllers/c_clustering');

router.get('/', clusteringController.index);

module.exports = router;