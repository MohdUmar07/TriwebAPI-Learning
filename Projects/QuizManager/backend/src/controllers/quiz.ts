// model
import { RequestHandler } from "express";
import { validationResult } from "express-validator";

import Quiz from "../models/quiz";
import { ReturnResponse } from "../utils/interfaces";
import ProjectError from "../helper/error";


const creatQuiz:RequestHandler = async (req, res, next ) => {
  try {
    const validationError = validationResult(req);
    if (!validationError.isEmpty()){
      const err = new ProjectError("Validation failed");
      err.statusCode = 422; 
      err.data = validationError.array()
      throw err;
    }

    
    const created_by = req.userId;
    const name = req.body.name;
    const question_list = req.body.question_list;
    const answer = req.body.answer;

    const quiz = new Quiz({ name, question_list, answer, created_by });
    const result = await quiz.save();
    const resp: ReturnResponse = {
      status: "success",
      message: "Quiz created successfully",
      data: { quizId: result._id }
    };
    res.status(201).send(resp);
  } catch (error) {
    next(error);
  }
};

const getQuiz:RequestHandler = async (req, res, next ) => {

  try {
    const quizId = req.params.quizId;
    const quiz = await Quiz.findById(quizId, { name: 1, question_list: 1, answer: 1, created_by: 1 });


    if (!quiz) {
      const err = new ProjectError("Quiz not found");
      err.statusCode = 404;
      throw err;
    }
    
    if (req.userId !== quiz.created_by.toString()) {
      const err = new ProjectError("You are not authorized");
      err.statusCode = 403;
      throw err;
    }

    const resp: ReturnResponse = { status: "success", message: "Quiz", data: { quiz } }
    res.status(201).send(resp);
  } catch (error) {
    next(error);
  }


};

const updateQuiz:RequestHandler = async (req, res, next ) => {

  try {
    const validationError = validationResult(req);
    if (!validationError.isEmpty()){
      const err = new ProjectError("Validation failed");
      err.statusCode = 422; 
      err.data = validationError.array()
      throw err;
    }

    const quizId = req.body._id;
    const quiz = await Quiz.findById(quizId);

    if (!quiz) {
      const err = new ProjectError("Quiz not found");
      err.statusCode = 404;
      throw err;
    }
   
    
    
    if (req.userId !== quiz.created_by.toString()) {
      const err = new ProjectError("You are not authorized");
      err.statusCode = 403;
      throw err;
    }

    if(quiz.is_publish){
      const err = new ProjectError("You cannot update, published Quiz");
      err.statusCode = 405;
      throw err;
    }

    quiz.name = req.body.name;
    quiz.question_list = req.body.question_list;
    quiz.answer = req.body.answer;
    await quiz.save();
    const resp: ReturnResponse = {
      status: "success",
      message: "Quiz Updated successfully",
      data: {}
    };
    res.status(200).send(resp);

  } catch (error) {
    next(error);
  }

};

const deleteQuiz:RequestHandler = async (req, res, next ) => {
  try {
    const quizId = req.params.quizId;
    const quiz = await Quiz.findById(quizId);

    if (!quiz) {
      const err = new ProjectError("Quiz not found");
      err.statusCode = 404;
      throw err;
    }

    if (req.userId !== quiz.created_by.toString()) {
      const err = new ProjectError("You are not authorized");
      err.statusCode = 403;
      throw err;
    }

    if(quiz.is_publish){
      const err = new ProjectError("You cannot delete, published Quiz");
      err.statusCode = 405;
      throw err;
    }

    await Quiz.deleteOne({ _id: quizId });

    const resp = {
      status: "success",
      message: "Quiz deleted successfully",
      data: {}
    };

    res.status(200).send(resp);
  } catch (error) {
    next(error);
  }
};

const publishQuiz:RequestHandler = async (req, res, next ) => {
  try {
    const quizId = req.body.quizId;
    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      const err = new ProjectError("Quiz not found");
      err.statusCode = 404;
      throw err;
    }

    if (req.userId !== quiz.created_by.toString()) {
      const err = new ProjectError("You are not authorized");
      err.statusCode = 403;
      throw err;
    }
    quiz.is_publish = true;

    await quiz.save();

    const resp: ReturnResponse = {
      status: "success",
      message: "Quiz Published successfully",
      data: {}
    };
    res.status(200).send(resp);


  } catch (error) {
    next(error)
  }
};

export { creatQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz };