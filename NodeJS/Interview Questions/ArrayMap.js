// double each element of array and create a new array.  
let arr = [1,2,3,4,5,6,7,8,9];
let arr2 = [];
for(let i=0;i<arr.length;i++){
    arr2[i] = arr[i]*2;
}
console.log(arr2);

// Map()

// any opartion on each elelment of array
// return same size array
console.log("Using Map()");
// let arrM = arr.map();//TypeError: undefined is not a function

let arrM = arr.map((elelment)=>elelment*2)
console.log(arrM);