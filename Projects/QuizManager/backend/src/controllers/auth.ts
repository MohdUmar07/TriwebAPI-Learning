
// import { Request, Response, NextFunction } from "express";
import { RequestHandler } from "express";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import User from "../models/user";
import { ReturnResponse } from "../utils/interfaces";
import ProjectError from "../helper/error";
import { validationResult } from "express-validator/lib/validation-result";


const registerUser:RequestHandler = async (req, res, next ) => {



    let resp: ReturnResponse;
    try {

        // validation
        const validationError = validationResult(req);
        if(!validationError.isEmpty()){
            const err = new ProjectError("Validation failed");
            err.statusCode = 422; 
            err.data = validationError.array()
            throw err;
        }

        const name = req.body.name;
        const email = req.body.email;
        let password = await bcrypt.hash(req.body.password, 12);


        const user = new User({ name, email, password });
        const result = await user.save();
        if (!result) {
            resp = { status: "error", message: "No result found", data: {} }
            res.send(resp);
        } else {
            resp = { status: "success", message: "Registration done!", data: { userId: result._id } };
            res.send(resp)
        }
    } catch (error) {
        next(error);
    }
};

const loginUser:RequestHandler = async (req, res, next) => {

    let resp: ReturnResponse;
    try {
        const email = req.body.email;
        const password = req.body.password;

        // find user with email -- 
        const user = await User.findOne({ email });
        if (!user) {
            const err = new ProjectError("User not found")
            err.statusCode = 401;
            throw err;
        } else {

            // verfy password using bcrypt
            const status = await bcrypt.compare(password, user.password);

            // than decide0
            if (status) {

                const token = jwt.sign({ userId: user._id }, "thisismyveryveryimportantsecretkey", { expiresIn: "1h" });

                resp = { status: "success", message: "Logged in", data: { token } };
                res.send(resp);
            } else {

                const err = new ProjectError("User and password is incorrect")
                err.statusCode = 401;
                throw err;
            }

        }

    } catch (error) {
        next(error);
    }

}

const isUserExist = async (email:String)=> {
    const user = await User.findOne({ email });
    if (!user) {
      return false;
    }
    return true;
       
} 
export { registerUser, loginUser, isUserExist};
