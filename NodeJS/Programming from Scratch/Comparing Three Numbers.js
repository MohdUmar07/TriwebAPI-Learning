const num1 = 10;  
const num2 = 15;
const num3 = 20;

if (num1 > num2 && num1 > num3) {
    console.log("num1 is the greatest");
} else if (num2 > num1 && num2 > num3) {
    console.log("num2 is the greatest");
} else if (num3 > num1 && num3 > num2) {
    console.log("num3 is the greatest");
} else {
    console.log("There is a tie among the greatest numbers");
}
