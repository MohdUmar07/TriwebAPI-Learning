
const addUserToDB = (userName:string, password:string, age:number) =>{

    console.log(userName,password);
    return "User Registration Done!"
}

type lockedState = "locked" | "unlocked";

interface User{
    id:number,
    uname:string,
    password:string,
    age:number,
    is_active: true | false
    accountStatus: string | number // union type 
}


const updateUserData = (objUser:User):string =>{ // function return type

    console.log(objUser.uname);
    // expect
    return "Update Done!"
    
}
export {addUserToDB, updateUserData }