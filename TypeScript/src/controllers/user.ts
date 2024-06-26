import {Request, Response} from 'express';

import {addUserToDB, updateUserData} from '../models/user';

const registerUser = (req:Request, res:Response)=>{
    // fetch data from req
    // validation 
    // normalize

    const userName: string = "Anas";
    const password: string = "Password";
    const age = 3;

    const result = addUserToDB(userName, password,age)

    res.send(result);
    // task and code
}

const checkTypesAndInterface =(req:Request, res:Response)=>{

    interface Point {
       readonly x:number,
       readonly y:number
    }

    let num:Point = {x:1, y:4}
        


    // Union and self define types
    // type status = true | false

    type lockedState = "locked" | "unlocked"; // union type self created type

    let xstate: lockedState = "locked";

    const myUser ={
        id:1,
        uname:"Anas",
        password:"string",
        age:19,
        is_active: false,
        accountStatus: 2
        }

    const result = updateUserData(myUser);
    res.send(result);
}

export {registerUser, checkTypesAndInterface};