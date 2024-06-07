const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const adviserController = require('../controllers/adviserController');

router.post('/service', auth, adviserController.createService);

// Add other adviser routes here

module.exports = router;
