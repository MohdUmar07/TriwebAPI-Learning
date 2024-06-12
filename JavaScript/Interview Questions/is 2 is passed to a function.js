function isTwoPassed() {
    // console.log(Array.from(arguments));`

    if (Array.from(arguments).indexOf(2) >= 0) {
        console.log("2 is Passed");
    } else{
        console.log("2 is not passed");
    }
}

isTwoPassed(3,2,4);