function function1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Function 1")
        }, 2000);
    })
}

function function2() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("Function 2")
        }, 1000);
    })
}

function function3() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Function 3")
        }, 1000);
    })
}

Promise.allSettled([function1(), function2(), function3()]).then((results)=>{
    console.log(results);
})