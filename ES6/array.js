let str = "hello";
let arr = Array.from(str);
console.log(arr);

function checkData(){
    console.log(arguments);
    let arr = Array.from(arguments);
    console.log(arr);
}
checkData(1,2,3,4,5,6);


console.log("");
console.log("==========================================================");



// // Array.keys

let arr1 = ["a","b","c","d"];

let keys = arr1.keys();

console.log(keys);

for(let e of keys){
    console.log(arr1[e]);
}


console.log("");
console.log("==========================================================");



// Array.find()

let arr2 = [12,13,15,14,2,51,56];

let firstOddNumber = arr2.find((value, index, arr2)=>{
    return value % 2 != 0;
});

// function getOdd(value, index, arr2){
//     return value % 2 != 0;
// }

console.log(firstOddNumber);

console.log("");
console.log("==========================================================");



// Array findIndex()

let arr3 = [12,13,14,15,1,17];

let indexOfFirstOdd = arr3.findIndex((value, index, arr3)=>{
    return value % 2 != 0;

})

console.log(indexOfFirstOdd);
