let a = 3;
let b = 2;

function addTowNumbers(n1,n2) {
    console.log(n1+n2);
        
}

setImmediate(()=>{
    addTowNumbers(a,b);
})

console.log("event loop 1");

