function marksDetails(...marks){

    this.subject1 = marks[0];
    this.subject2 = marks[1];
    this.subject3 = marks[2];
    this.subject4 = marks[3];
    this.subject5 = marks[4];

    let result = 'pass';
    marks.forEach((num)=>{
        if(num < 33){
            result = 'fail';
        }
    })

    this.result = result;

}

function student(sname, ...marks){
    this.sname = sname;
    marksDetails.apply(this,marks)
}

const Student1 = new student("Aban", 46, 38, 29, 36, 55);

console.log(Student1);