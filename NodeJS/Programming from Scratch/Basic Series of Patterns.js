// Program-1
// * 
// * * 
// * * *
// * * * * 
// * * * * * 

let i = 1;

while (i <= 5) {
    let j = 1;
    while (j <= i) {
        process.stdout.write("* ");
        j++;
    }
    console.log();
    i++;
}

console.log("==============================================================================");
console.log("==============================================================================");

// Program-2
// * * * * *
// * * * *
// * * *
// * *   
// * *  

i = 5;

while (i >= 1) {
    let j = 1;
    while (j <= i) {
        process.stdout.write("* ");
        j++;
    }
    console.log();
    i--;
}

console.log("==============================================================================");
console.log("==============================================================================");

// Program-3
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * *
// * * *
// * *
// *

i = 1;
while (i <= 5) {
    let j = 1;
    while (j <= i) {
        process.stdout.write("* ");
        j++;
    }
    console.log();
    i++;
}

i -= 1;

while (i >= 1) {
    let j = 1;
    while (j <= i) {
        process.stdout.write("* ");
        j++;
    }
    console.log();
    i--;
}

console.log("==============================================================================");
console.log("==============================================================================");

// Program-4
// * 
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

i = 1;
while (i <= 5) {
    let j = 1;
    while (j <= i) {
        process.stdout.write("* ");
        j++;
    }
    console.log();
    i++;
}

i -= 2;

while (i >= 1) {
    let j = 1;
    while (j <= i) {
        process.stdout.write("* ");
        j++;
    }
    console.log();
    i--;
}

console.log("==============================================================================");
console.log("==============================================================================");

// Program-5 
// *
// ****
// ***
// ******

let start = 1;
let gap = 3;
let end = 5; // Assuming 5 as the default ending point

i = start;
while (i <= end) {
    let j = 1;
    while (j <= i) {
        process.stdout.write("* ");
        j++;
    }
    console.log();
    i += gap;
    gap = gap === 3 ? -1 : 3;
}
