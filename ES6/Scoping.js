// Scoping
//     Block-Scoped Variable
// e.g 1
//  console.log(a); //ReferenceError: Cannot access 'a' before initialization
//  let a = 5;

// e.g 2
let x;
{
    var n = 5;
    x = 7;
    const y = 9; 
}
console.log(n);
console.log(x); // ReferenceError: x is not defined
console.log(y); //ReferenceError: y is not defined



//     Block-Scoped Function

