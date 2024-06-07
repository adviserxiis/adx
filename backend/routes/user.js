const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userController = require('../controllers/userController');

router.get('/services', auth, userController.getServices);
router.post('/book', auth, userController.bookService);

// Add other user routes here

module.exports = router;
