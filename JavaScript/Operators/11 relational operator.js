// in operator--

let obj = {userName:"Anas",mobile:8924};
if('userName' in obj){
    console.log(obj.userName);
}

function abc(){
    this.a = 5;

}
let y = new abc();
console.log(y)

console.log(y instanceof abc); // true
console.log(obj instanceof abc); // false