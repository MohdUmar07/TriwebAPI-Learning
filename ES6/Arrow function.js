// const xyz = () => {
//     console.log("xyz ",this)
// }
// ---> constructor XXX
// ---> arguments XXX
// ---> new.target XXX
// console.log("outer ",this)
// xyz();


// 2 Expresions bodies

// let arr = [1,2,3,4];
// 2-Example 1

// const arrmap = arr.map(function(element){
//     return element + 2;
// })

// or


// const arrmap = arr.map(element => element + 2);
// console.log(arrmap);

// 2-Example 2

// const retObj = (uname, age)=>({uname:uname,age:age})
// console.log(retObj("Alex",30));

// 2-Example 3

const addTowNumber = (num1, num2) => num1+num2;
console.log(addTowNumber(6,3));

// Statement bodies
// Ecample 1

// let arr = [1,2,3,4,5,6];

// arr.forEach((e)=>{
//     console.log(e,"");
// })