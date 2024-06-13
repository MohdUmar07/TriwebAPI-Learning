// Extended Parameter Handling 

// 1 Default Values

function addTowNumbers(n1, n2=0){
    return n1 + n2;

}

let sum1 = addTowNumbers(1,3);
console.log("Sum = ",sum1)

let sum2 = addTowNumbers(1);
console.log("Sum = ",sum2); 
// without default parameter -> Sum =  NaN
// With efault parameter ->

