// () => {} Arrow Function --

const addTwoNumber = (num1, num2) =>{
    return(num1+num2);
}

const addHitoName = uname =>{
    return "Hi " + uname;
}

const addHelloToName = uname => "Hello " + uname;

const res = addTwoNumber(0,0.8);
console.log(res);

const hiName = addHitoName("Anas");
console.log(hiName);

const helloName = addHelloToName("Umar");
console.log(helloName);