const express = require('express');
const router = express.Router();

const clusteringController = require('../app/controllers/c_clustering');

router.get('/', clusteringController.index);
router.post('/exec', clusteringController.exec);

module.exports = router;