function addNumbers(...numbers){// rest parameter
    let sum = 0;
    numbers.forEach(e => {
        sum = sum + e;
    });;

    return sum;
}

let res = addNumbers(2,4);
console.log(res);

// function add3Numbers(num1,num2,num3){
//     return num1 + num2 + num3;
// }

let res1 = addNumbers(2,4,4);
console.log(res1);

let res2 = addNumbers(2,4,4);
console.log(res2);

let res3 = addNumbers(2,4,4,4,5,8,1,3,8);
console.log(res3);

console.log("===============================================================");

function addNumbers2(num1,num2,...numbers){// rest parameter
    
    console.log("Num1 - " ,num1);
    console.log("Num2 - " ,num2);
    console.log("Rest - " ,numbers);
}



let $res3 = addNumbers2(2,4,4,4,5,8,1,3,8);

