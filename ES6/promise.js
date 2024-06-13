function updatedAge (age){

    return new Promise((resolve, reject)=>{

        if(age > 0){
            age = age + 1;
            resolve(age);    
        } else{
            reject("Invalid age");
            // throw new Error("Invalid age");
        }
        
    })
}

updatedAge(-7)
    .then((updatedAge)=>{
        console.log("Updated age is ", updatedAge);
    
    })
    .catch((err)=>{
        console.log("error 101: Age not updated");
    })
