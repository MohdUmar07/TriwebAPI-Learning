import { Request, Response, NextFunction } from "express"; 
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from "../models/user";


interface ReturnResponse {
    status: "success" | "error",
    message: String,
    data: {}
}

const registerUser = async (req:Request, res:Response) => {
    let resp : ReturnResponse;
    try {

        const email = req.body.email;
        const userName = req.body.userName;
        const password = await bcrypt.hash(req.body.password, 12);

        const user = new User({email, userName, password})
        const result = await user.save();
        if (!result) {
            resp = {status:"error", message:"No result found", data:{}};
            res.send(resp);
        } else {
            resp = {status:"success", message:"Registration completed!", data:{usrId:result._id}};
            res.send(resp);
        }
    } catch (error) {
        // console.log(error);
        resp = {status:"error", message:"Something went wrong", data:{}};
        res.status(500).send(resp);
    }
   
}

const loginUser = async(req:Request, res:Response) => {
    let resp : ReturnResponse;
    try {
        const email = req.body.email;
        const password = req.body.password;
    
        // find user with email
        const user = await User.findOne({ email });
        console.log(user);
        if (!user) {
            resp = {status:"error", message:"No user found", data:{}};
            res.status(401).send(resp);             
        } else {
            const status = await bcrypt.compare(password, user.password)
            if(!status) {       
                resp = {status:"error", message:"Credentials Mismatch", data:{}};
                res.status(401).send(resp); 
            } else {
                const token = jwt.sign({userId:user._id}, "thisismysecretkey", { expiresIn: '1h' })
                resp = {status:"success", message:"LogedIn", data:{UserId:user._id, userName:user.userName, token}};
                res.status(200).send(resp);  
            }
        }
        
        // varify user using bcryptjs
        

    } catch (error) {
        resp = {status:"error", message:"Something Went Wrong", data:{}};
        res.status(500).send(resp)
    }    

}

const getUser = async(req:Request, res:Response) => {
    let resp:ReturnResponse
    try {
        // console.log("body", req.body);
        const userId = req.params.userId;
        const user = await User.findById(userId,{userName:1, email:1});
        if (!user) {
            resp = {status:"error", message:"No user found", data:{}};
            res.send(resp)
        } else {
            resp = {status:"success", message:"User found", data:user};
            res.send(resp)
        }
    } catch (error) {
        // console.log(error);
        resp = {status:"error", message:"Something went wrong", data:{}};
        res.status(500).send(resp)
    }
}

const updateUser = async(req:Request, res:Response) => {
    let resp:ReturnResponse
    try {
        const userId = req.body._id;
        const user = await User.findById(userId);

        if (!user) {
            resp = {status:"error", message:"No user found", data:{}};
            res.send(resp)
        } else {
            user.userName = req.body.userName;
            await user.save();
            resp = {status:"success", message:"User updated", data:user};
            res.send(resp)
        }} 
        catch (error) {
        // console.log(error);
        resp = {status:"error", message:"Something went wrong", data:{}};
        res.status(500).send(resp)
    }
}

export {registerUser, getUser, updateUser, loginUser};