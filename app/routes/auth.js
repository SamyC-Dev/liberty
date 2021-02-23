const express = require('express');
const router = express.Router();

// Import Controllers
const authController = require('../controllers/authController');

router.get('/', authController.homePage);
router.post('/signup', authController.signupAction);
router.post('/signin', authController.signinAction);

module.exports = router;