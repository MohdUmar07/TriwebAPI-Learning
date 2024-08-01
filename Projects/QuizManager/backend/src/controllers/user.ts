import { RequestHandler } from "express";
import User from "../models/user";
import { ReturnResponse } from "../utils/interfaces";
import ProjectError from "../helper/error";


const getUser:RequestHandler = async (req, res, next) => {
    // console.log("body", req.body);
    // console.log("query",req.query);
    // console.log("params", req.params.userId);
    // res.send("Done!")
    // console.log("Changes are changed");


    let resp: ReturnResponse;
    console.log(req.userId);

    try {
        const userId = req.params.userId;

        if (req.userId != req.params.userId) {
            const err = new ProjectError(" You are not allowed");
            err.statusCode = 401;
            err.data = { hi: "its error" }
            throw err;
        }

        const user = await User.findById(userId, { name: 1, email: 1 });
        if (!user) {
            const err = new ProjectError("No user Found")
            err.statusCode = 401;
            throw err;
        } else {
            resp = { status: "success", message: "User found ", data: user };
            res.status(200).send(resp)
        }
    } catch (error) {

        next(error);

    }

}

const updateUser:RequestHandler = async (req, res, next) => {


    let resp: ReturnResponse;
    try {


        if (req.userId != req.body._id) {
            const err = new ProjectError("You are not allowed")
            err.statusCode = 401;
            throw err;
        }

        const userId = req.body._id;
        const user = await User.findById(userId);

        if (!user) {
            const err = new ProjectError("User not found")
            err.statusCode = 401;
            throw err;

        } else {
            user.name = req.body.name;
            await user.save();

            resp = { status: "success", message: "User updated", data: {} };
            res.send(resp);
        }

    } catch (error) {
        next(error);
    }

};




export { getUser, updateUser };