import { RequestHandler } from "express";
import Quiz from "../models/quiz";
import Report from "../models/report";
import ProjectError from "../helper/error";
import { ReturnResponse } from "../utils/interfaces";



const startExam:RequestHandler = async (req, res, next ) => {
    try {
        const quizId =  req.params.quizId;
        const quiz = await Quiz.findById(quizId,{name:1,question_list:1,is_publish:1});
        if (!quiz) {
            const err = new ProjectError("No Quiz found");
            err.statusCode = 404;
            throw err;
        }

        if(!quiz.is_publish){
            const err = new ProjectError("quiz is not published");
            err.statusCode = 405;
            throw err;
        }
        const resp: ReturnResponse = { status: "success", message: "Quiz", data: quiz }
        res.status(200).send(resp);
    } catch (error) {
        next(error);

    }
}

const submitExam:RequestHandler = async (req, res, next ) => {
   try {
    const quizId = req.body.quizId;
    const attempted_question = req.body.attempted_question;
    
    const quiz = await Quiz.findById(quizId,{answer:1});
    if (!quiz) {
        const err = new ProjectError("No Quiz found");
        err.statusCode = 404;
        throw err;
    }
    const answer = quiz.answer;

    const userId = req.userId;
    const allQuestiions = Object.keys(answer);
    const total = allQuestiions.length;
    
    let score = 0;
    
    for (let i=0;i<total;i++){
        const question_number = allQuestiions[i];
        if(!! attempted_question[question_number] && answer[question_number] == attempted_question[question_number]){
            score = score + 1;
        }
    }

    const report = new Report({userId, quizId, score, total});
    const data = await report.save();
    const resp: ReturnResponse = { status: "success", message: "Quiz submitted", data: {total, score, resultId:data._id} }
    res.status(200).send(resp);
    
   } catch (error) {
    next(error)
   }
}

export { startExam, submitExam };