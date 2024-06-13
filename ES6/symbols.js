const person = {

    id:1234,
    pname:"xyz"

}


const xyz = Symbol('xyz');
person[xyz] ="Hidden Data";

// console.log(person);
// person.id = 2;
// console.log(person);
// console.log(Object.getOwnPropertyNames(person));

// console.log(person.id);
// console.log(person[xyz]);

console.log(Object.getOwnPropertySymbols(person));
const IamSmart = Symbol('xyz');
console.log(person[IamSmart]);

// console.log(Symbol('xyz') == Symbol('xyz'));

console.log(person[xyz]);

console.log("=====================================================================");

// Global Symbol

const person1 = {

    id:1234,
    pname:"abc"

}


const abc = Symbol.for('abc');
person1[abc] = "Not hidden symbol data";


console.log(person1[abc]);

const iKnowThis = Symbol.for('abc');

console.log(person1[iKnowThis]);