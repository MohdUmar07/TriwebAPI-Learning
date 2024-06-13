// // Spread Parameters
// // Array Case
// let arr = [1,2,3,4,5,6,7,8,9];
// let arr1 = [11,23];
// let combined_arr = [...arr, ...arr1];
// console.log(combined_arr);
// console.log(...arr);

let obj_student = {name:"Aban",age:18};
let obj_student1 = {...obj_student, city:"Gonda"};
console.log("obj_student ",obj_student);
console.log("obj_student1 ",obj_student1);

obj_student1.name = "Anas";
console.log("obj_student1 after update ",obj_student1)
console.log("obj_student again printing ",obj_student)