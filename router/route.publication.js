const express = require('express');
const router = express.Router();
const pubilcationController = require('../controllers/controller.publication');
const publicationModel = require('../model/pubilcation.model');

router.get('/actu', pubilcationController.actuPage);
router.post('/new_actu', pubilcationController.postActu)


module.exports = router;