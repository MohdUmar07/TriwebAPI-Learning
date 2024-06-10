// JavaScript Supports anonymous functions--- 


const square = function(num){
    console.log(num*num);

}

square(5);
square(3);
square(2*2);


const getcube = function cube(num){
    console.log(num*num*num);

}

// cube (5); // ReferenceError: cube is not defined
getcube(5);
getcube(25*25);