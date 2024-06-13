// const has immutable variable not the content of variable--- 

//Example 1
// const a= 5;
// console.log(a);
// a = 2; // TypeError: Assignment to constant variable.
// console.log(a);

// Example 2


const obj = {name:"Anas", age:20};
console.log("Before",obj);
// obj = {name:"Aban", age:30}; // TypeError: Assignment to constant variable.
// console.log("After",obj);

// than how to change the content
obj.name = "Aban";
obj.age = 30;
console.log("After",obj);