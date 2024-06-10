function updateName(student){
    student.name = 'Hello ' + student.name;
    console.log(student);
}

let objS = {name: "Anas"};
updateName (objS);
console.log("Unchanged Object is ", objS); // it is also changes

// Pass by reference