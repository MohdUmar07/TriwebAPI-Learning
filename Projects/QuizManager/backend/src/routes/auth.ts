import express from 'express';
import {registerUser, loginUser, isUserExist } from '../controllers/auth';
import {body} from 'express-validator'


const router = express.Router();

// POST /auth/
router.post('/', [
    body('name')
        .trim()
        .not()
        .isEmpty()
        .isLength({min:4})
        .withMessage("Please enter a valid name, contains minimum 4 characters"),
    body('email')
        .trim()
        .isEmail()
        .custom((emailId:String) =>{
            return isUserExist(emailId)
                .then((status:Boolean)=>{
                    if(status){
                        return Promise.reject("User already exist!")
                        // const err = new ProjectError("User already exist!");
                        // err.statusCode = 422;
                        // throw err;
                    }
                })
                .catch((err)=>{
                    return Promise.reject(err)
                })
        })
        .normalizeEmail(),
    body('password') 
        .trim()
        .isLength({min:8})
        .withMessage("Password must be 8 character long"),
    body('confirm_password') 
        .trim()
        .custom((value, {req})=>{
            if(value != req.body.password){
                return Promise.reject("Password must be same");
            }
            return true;
            
        })
        


], registerUser);

// POST /auth/login
router.post('/login', loginUser);

export default router;