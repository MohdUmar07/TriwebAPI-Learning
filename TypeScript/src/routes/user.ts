const express = require('express');

// const userController = require('../controllers/user')

import {registerUser,checkTypesAndInterface} from '../controllers/user'

const router = express.Router();


router.post('/register', registerUser);
router.post('/update', checkTypesAndInterface);


export default  router;
