const express = require('express');

// const userController = require('../controllers/user')

const {registerUser} = require('../controllers/user')

const router = express.Router();


router.post('/register', registerUser);

module.exports = router;