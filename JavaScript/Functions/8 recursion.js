// using

function printNumSeries(num){
    for(let i = num; i>0; i--){
        console.log(i);
    }
}
printNumSeries(5);


// without loop print 5,4,3,2,1 --> using recursion
console.log("using recursion");

function printNumSeriesUsingRecursion(num){

    if (num == 0){
        return 0;
    }
    console.log(num);
    num--
    printNumSeriesUsingRecursion(num);
    
}

printNumSeriesUsingRecursion(5);