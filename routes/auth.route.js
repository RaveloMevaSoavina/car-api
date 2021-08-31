const express = require('express');
const controller = require('../controllers/auth.controller')
const { verifySignUp } = require('../middleware')
const router = express.Router();

router.post('/login', controller.signin);
router.post('/register', verifySignUp.checkDuplicateUsername,  controller.signup);

module.exports = router