// how will you write a method on instance of a date, whcich will give you next date?

function getNextDate() {
    let date = this.getDate();
    return date + 1;
}

let myDateInstance = new Date();

myDateInstance.getNextDate = getNextDate;

const nextDate = myDateInstance.getNextDate();
console.log(`Next date is ${nextDate}`);
