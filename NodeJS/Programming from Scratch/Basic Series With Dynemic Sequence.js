let start = 1;
let gap = 3;
let numberOfOccrance = 8; // Assuming 8 as the number of occurrences

let val = start;

for (let i = 1; i <= numberOfOccrance; i++) {
    console.log(val);
    val += gap;

    if (gap == 3) {
        gap = -1;
    } else {
        gap = 3;
    }
}
