// 1 Array Matching
let arr = [1,2,3,4,5];
let [a,b] = arr;

console.log("First element : ", a);
console.log("Second element : ", b);

[b,a] = [a,b];

console.log("arr is : ", arr);
console.log("First element : ", a);
console.log("Second element : ", b);

console.log();
console.log("=================================================");
console.log("=================================================");
console.log();

// 2 Object Matching, Shorthand Matching

function getStudent (){
    let student = {
        uName:"Anas",
        age:"19",
        level:"BCA"
    }

    return student;

}

let {uName, age, level} = getStudent();
console.log(uName, age, level);

console.log();
console.log("=================================================");
console.log("=================================================");
console.log();

// 3 Object Matching, Deep Matching

function getData(){
    let obj = {
        ename:"Aban",
        salary:100000,
        location:{
            city:"Lucknow"
        }
    }

    return obj;
}

let {ename: Employee_Name, salary:Employee_Salary, location:{city:Employee_City}} = getData();

console.log("Ename: ", Employee_Name, "Salary", Employee_Salary, "Location",Employee_City);