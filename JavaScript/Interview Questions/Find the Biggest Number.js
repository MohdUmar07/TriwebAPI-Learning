// How to find the biggest Number using Math.max() - apply ?

const numList = [1,2,3,4,6,8,5,44,15];

const maxNum = Math.max.apply(null, numList);
// const maxNum = Math.max(...numList);


console.log(maxNum);