const userModel = require('../models/user')

// register
module.exports.register = async (req, res) =>{
    let insertedId = await userModel.Insert(req.body);
    console.log(insertedId);
    if(insertedId > 0){
        res.send({status:"Success", data:{id:insertedId}});
    } else{
         res.send({status:"Error", message:"User Registration failed ERROR:204"});
    }
    
    
}

// get

module.exports.get = async (req, res) =>{
    
    let data = await userModel.get(req.body);
    if(data){
        res.send({status:"Success", data:data});
    } else{
         res.send({status:"Error", message:"User not found ERROR:203"});
    }
}


// update

module.exports.update = async (req, res) =>{
    let status = await userModel.get(req.body);
    if(status){
        res.send({status:"Success", message:"User data updated"});
    } else{
         res.send({status:"Error", message:"User not updated ERROR:202"});
    }
}


// delete
module.exports.delete = async (req, res) =>{
    let status = await userModel.get(req.body);
    if(status){
        res.send({status:"Success", message:"User deleted"});
    } else{
         res.send({status:"Error", message:"User not deleted ERROR:201"});
    }
}
