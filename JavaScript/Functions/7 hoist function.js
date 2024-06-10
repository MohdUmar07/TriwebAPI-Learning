console.log(getNum3); // [Function: getNum3]
console.log(getNum3()); // 3

function getNum3(){
    return 3;
}

console.log(getNum3()); // 3




// console.log(getNum4()); // TypeError: getNum4 is not a function

console.log(getNum4); // undefined
var getNum4 = function(){
    return 4;
}
console.log(getNum4); // [Function: getNum4]
console.log(getNum4()); // 4



// console.log(getNum5()); // ReferenceError: Cannot access 'getNum5' before initialization
// console.log(getNum5); // ReferenceError: Cannot access 'getNum5' before initialization


const getNum5 = function(){
    return 5;
}
console.log(getNum5); // [Function: getNum5]
console.log(getNum5()); // 5
