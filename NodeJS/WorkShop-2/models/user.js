
const db = require("../util/database");

module.exports.Insert = async (userData)=>{
    // console.log(userData.name);

let id = 0;    
try{
    let query = "INSERT INTO `user`(`name`,`email`,`password`,`remark`) VALUES (?,?,?,?)" 



// execute
    let result = await db.execute(query,[userData.name,userData.email,userData.password,userData.remark])

    id = result[0].insertId;
} catch (error){
    console.log(error);
    

}

// result return
return id;

}

module.exports.get = async(userData)=>{
    let retData = ""
    try{
        let query = "SELECT * FROM `user` WHERE id=?";
        let result = await db.execute(query,[userData.id]);
        retData =result[0][0];
    } catch(error){
        console.log(error);

    }
    return retData;
}

module.exports.update = async(userData)=>{
    
    try{
        let query = "UPDATE `user` SET `password`=? WHERE id=?";;
        await db.execute(query,[userData.password, userData.id]);
        return true;
    } catch(error){
        console.log(error);
        return false
    }
   
}

module.exports.delete = async(userData)=>{
    
    try{
        let query = "DELETE FROM `user` WHERE id=?";
        await db.execute(query,[userData.id]);
        return true;
    } catch(error){
        console.log(error);
        return false
    }
   
}