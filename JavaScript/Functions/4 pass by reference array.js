function addOne(arr){
    arr[0] = arr[0] + 1;
    arr[1] = arr[1] + 1;
    arr[2] = arr[2] + 1;
    arr[3] = arr[3] + 1;
    arr[4] = arr[4] + 1;
    

}

let arr1 = [2,4,6,8,10];
addOne(arr1);
console.log("Old Array is ", arr1); // it is also changes

// Pass by reference