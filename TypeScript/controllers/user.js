const {addUserToDB} = require('../models/user')

const registerUser = (req, res)=>{
    // fetch data from req
    // validation 
    // normalize

    const userName = "Anas";
    const password = "Password";

    const result = addUserToDB(userName, password)

    res.send(result);
    // task and code
}

module.exports = {registerUser};