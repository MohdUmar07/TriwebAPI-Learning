
function abc(){
    this.a = 5;

}
let b = new abc();
let c =  new abc();


console.log(b)

c.a = 8;
console.log(c);