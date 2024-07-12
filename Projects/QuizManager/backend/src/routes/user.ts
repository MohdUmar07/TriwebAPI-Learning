import  express  from "express";

import { getUser, registerUser, updateUser, loginUser } from "../controllers/user";

const router = express.Router();

// POST /user
router.post('/', registerUser);

// POST /user/login
router.post('/login', loginUser);

// GET /user/:userId
router.get('/:userId', getUser);

// PUT /user/
router.put('/', updateUser);

export default router;
