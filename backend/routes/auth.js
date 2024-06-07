const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/user/signup', authController.userSignup);
router.post('/user/login', authController.userLogin);
router.post('/adviser/signup', authController.adviserSignup);
router.post('/adviser/login', authController.adviserLogin);

module.exports = router;
