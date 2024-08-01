import express from 'express';
import { getUser, updateUser, } from '../controllers/user';
import { isAuthenticated } from "../middlewares/isAuth";

const router = express.Router();

// GET /user/:userId
router.get('/:userId', isAuthenticated, getUser);

// PUT /user/
router.put('/', isAuthenticated, updateUser);

export default router;