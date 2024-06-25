// Map vs WeakMap

// Example of Map
let user = {
    uname:"Anas",
    mobile:892454422
}

// Example of WeakMap
let key1 = {};
let key2 = {uname:"Umar"}

let userOfWeakMap = {
    [key1]:"Some data",
    [key2]:"New data"

}

console.log(userOfWeakMap);

