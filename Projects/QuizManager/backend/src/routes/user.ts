import  express  from "express";

import { getUser, registerUser, updateUser } from "../controllers/user";

const router = express.Router();

// POST /user
router.post('/', registerUser);

// GET /user/:userId
router.get('/:userId', getUser);

// PUT /user/
router.put('/', updateUser);

export default router;
