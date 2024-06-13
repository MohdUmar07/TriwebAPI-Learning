// Doing able to use Object as a key is an important Map feature.

const student1 = {name:"Anas"};
const student2 = {name:"Aban"};

const studentMap = new Map();

studentMap.set('key1',12);
// console.log(studentMap.get('key1')); 

studentMap.set(student1," He is good student");
studentMap.set(student2," He is  average student");

console.log(studentMap);