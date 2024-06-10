
function getProduct(multiplier){

    return function (num){
        return multiplier*num;

    }
  
}
const double = getProduct(2);
let res = double(4);
console.log(res);

const triple = getProduct(3);
let res1 = triple(4);
console.log(res1);


const quad = getProduct(4);
let res2 = quad(4);
console.log(res2);