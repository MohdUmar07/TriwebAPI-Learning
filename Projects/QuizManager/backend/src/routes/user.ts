import  express  from "express";

import { getUser, updateUser } from "../controllers/user";

const router = express.Router();

// GET /user/:userId
router.get('/:userId', getUser);

// PUT /user/
router.put('/', updateUser);

export default router;
