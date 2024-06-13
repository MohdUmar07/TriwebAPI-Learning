class Student{


    constructor(sName, class_id){
        this.sName = sName;
        this.class_id = class_id;
    }
}

const student1 = new Student("Anas", 6);
const student2 = new Student("Aban", "7th");
console.log(student1, '\n', student2);