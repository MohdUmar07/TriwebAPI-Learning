// let decideFun = 'add'; // configuration---
let decideFun = 'subtract';
let getResult;
    if (decideFun == 'add'){
        getResult = function(num1, num2){
            console.log(num1 + num2);
      
        } 
}   else if (decideFun == 'subtract'){
        getResult= function(num1,num2){
            console.log(num1- num2);
        }    
    
}   




getResult(5, 3)