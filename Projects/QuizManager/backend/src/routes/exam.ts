import express from "express";

import { isAuthenticated } from "../middlewares/isAuth";
import { startExam, submitExam } from "../controllers/exam";

const router = express.Router();

// GET/exam/quizId

router.get('/:quizId', isAuthenticated, startExam);

// POST /exam
router.post('/', isAuthenticated, submitExam);

export default router;