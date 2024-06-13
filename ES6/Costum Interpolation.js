// Costum Interpolation

function someThing(string, name, age){
    console.log("String", string);
    console.log("Name", sName );
    console.log("Age", age);
}



let sName = "Anas";
let age = 19;
// someThing("Student's name is ' ' and age is ' ' ",sName, age);

someThing`Student name is ${sName} and age is ${age}.`;




