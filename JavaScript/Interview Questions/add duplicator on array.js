// How to add duplicator on array?

const arr =  [1,2];
Array.prototype.duplicator = function () {
    return [...this, ...this];
}

console.log(arr.duplicator());

