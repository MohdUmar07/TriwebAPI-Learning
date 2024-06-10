function getFunction(num){

    function square(){
        // console.log(num*num);
        return num*num;
    }
    let sqr = square();
    console.log(sqr)
    return sqr;
}

let result = getFunction(5);
console.log(result)