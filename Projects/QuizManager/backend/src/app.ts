import express from 'express';
import mongoose from 'mongoose';
import { Request, Response, NextFunction } from "express"

import userRoutes from './routes/user';
import authRoutes from './routes/auth';
import ProjectError from './helper/error';
import quizRoutes from './routes/quiz';
import examRoute from './routes/exam';
import reportRoute from './routes/report';
import { ReturnResponse } from "./utils/interfaces";


const app = express();



const connectionString = process.env.CONNECTION_STRING || "";

app.use(express.json())

declare global {
    namespace Express {
        interface Request {
            userId: String;
        }
    }
}

// app.get('/',(req,res)=>{
//     res.send("Hi Hello");

// })

app.use('/user', userRoutes);
app.use('/auth', authRoutes);

app.use('/quiz', quizRoutes);

app.use('/exam', examRoute);

app.use('/report', reportRoute);

app.use((err: ProjectError, req: Request, res: Response, next: NextFunction) => {
    let message: String;
    let statusCode: number;
    

    if (err.statusCode && err.statusCode < 500) {
        message = err.message;
        statusCode = err.statusCode;
    } else {
        message = "Something went wrong. Please try again later.";
        statusCode = 500;
    }

    let resp: ReturnResponse = { status: "error", message, data: {} };

    if (err.data) {
        resp.data = err.data;
    }

    console.log(err.statusCode, err.message); // Log the error

    res.status(statusCode).send(resp);
});

mongoose.connect(connectionString)
.then((res) => {
    // console.log(res);
    // app.listen(3000, () => {
    //     console.log("Server Conected")
    // });
})
.catch((err) => {
    console.log(err);
})

app.listen(process.env.PORT, () => {
    console.log("Server Conected");   
});