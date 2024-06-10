
const printSeries = function printNumSeriesUsingRecursion(num){

    if (num == 0){
        return 0;
    }
    console.log(num);
    num--
    // Method 2
    // printNumSeriesUsingRecursion(num);
    
    // Method 3
    // arguments.callee(num);

    // Methode 4
    printSeries(num);
    
}

// printNumSeriesUsingRecursion(5); //ReferenceError: printNumSeriesUsingRecursion is not defined
printSeries(5);