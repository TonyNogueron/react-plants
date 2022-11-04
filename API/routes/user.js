const express = require('express');
const router = express.Router();
const registerController = require('../controller/userController');

router.post('/user/register', registerController.registerUser);
router.get('/user/get', registerController.getUsers);

module.exports = router;