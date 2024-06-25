function fun1(){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            rej("Function1");
        }, 500);
    })
}

function fun2(){
    return new Promise((res, rej)=>{
        setTimeout(() => {
           res("Function2") 
        }, 2000);
    })
}

function fun3(){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res("Function3")
        }, 1000);
    })
}


const listOfPromises = [fun1(), fun2(), fun3()];
Promise.race(listOfPromises)
.then((result)=>console.log("Fulfilled",result))
.catch((error)=>console.log("Rejected",error));