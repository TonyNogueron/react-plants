const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

router.post('/registerUser', registerController.registerUser);

module.exports = router;