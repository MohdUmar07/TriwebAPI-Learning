// EPSILON

let x = Number.EPSILON;
console.log(x); // 2.220446049250313e-16



// MIN_SAFE_INTEGER

let y = Number.MIN_SAFE_INTEGER;
console.log(y); // -9007199254740991



// MAX_SAFE_INTEGER

let z = Number.MAX_SAFE_INTEGER;
console.log(z); // 9007199254740991


// Number Methods

let a = 123;

console.log(Number.isInteger(a));

let b = 9007199254740991;

console.log("Safe inetger",Number.isSafeInteger(b));