"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkTypesAndInterface = exports.registerUser = void 0;
const user_1 = require("../models/user");
const registerUser = (req, res) => {
    // fetch data from req
    // validation 
    // normalize
    const userName = "Anas";
    const password = "Password";
    const age = 3;
    const result = (0, user_1.addUserToDB)(userName, password, age);
    res.send(result);
    // task and code
};
exports.registerUser = registerUser;
const checkTypesAndInterface = (req, res) => {
    let num = { x: 1, y: 4 };
    console.log(num);
    let xstate = "locked";
    const myUser = {
        id: 1,
        uname: "Anas",
        password: "string",
        age: 19,
        is_active: false,
        accountStatus: 2
    };
    const result = (0, user_1.updateUserData)(myUser);
    res.send(result);
};
exports.checkTypesAndInterface = checkTypesAndInterface;
