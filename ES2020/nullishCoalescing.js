// nullish coalescing ?? vs OR || 

function PrintSomething(value) {
    printThis = value ?? "Not found";
    console.log("printThis is ", printThis);
}

let var1 = null;

PrintSomething(var1);