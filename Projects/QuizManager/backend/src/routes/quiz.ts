import express from "express";
import { creatQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz } from '../controllers/quiz';
import { isAuthenticated } from "../middlewares/isAuth";
import { body } from 'express-validator'
const router = express.Router();


// create
// POST /quiz/
router.post("/", isAuthenticated, [
    body('name')
        .trim()
        .not()
        .isEmpty()
        .isLength({ min: 10 })
        .withMessage("Please enter a valid name, contains minimum 10 characters"),
    body('question_list')
        .custom(question_list =>{
            if(question_list.length==0){
                return Promise.reject("Enter atleast 1 question");
            }
            return true;
        }),
    body('answer')
        .custom(answer => {
            
            if(Object.keys(answer).length==0){
                return Promise.reject("Answer should not be empty");
            }
            return true;
            
        })    
], creatQuiz);

// get
// GET/quiz/:quizId
router.get("/:quizId", isAuthenticated, getQuiz);

// update
// PUT/quiz
router.put("/",isAuthenticated,[
    body('name')
        .trim()
        .not()
        .isEmpty()
        .isLength({ min: 10 })
        .withMessage("Please enter a valid name, contains minimum 10 characters"),
    body('question_list')
        .custom(question_list =>{
            if(question_list.length==0){
                return Promise.reject("Enter atleast 1 question");
            }
            return true;
        }),
    body('answer')
        .custom(answer => {
            
            if(Object.keys(answer).length==0){
                return Promise.reject("Answer should not be empty");
            }
            return true;
            
        })    
], updateQuiz);

// delete
// Delete/quiz/:quizId
router.delete("/:quizId", isAuthenticated, deleteQuiz);

// Publish
// Patch
router.patch("/publish", isAuthenticated, publishQuiz);


export default router;