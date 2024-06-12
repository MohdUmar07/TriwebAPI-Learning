function printName(){
    console.log(`${this.firstName} ${this.lastName}`);
}

const student1 = {
        firstName: "Mohd",
        lastName: "Umar"
}

const res = printName.bind(student1);

res();