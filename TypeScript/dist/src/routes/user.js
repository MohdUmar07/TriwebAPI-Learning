"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
// const userController = require('../controllers/user')
const user_1 = require("../controllers/user");
const router = express.Router();
router.post('/register', user_1.registerUser);
router.post('/update', user_1.checkTypesAndInterface);
exports.default = router;
