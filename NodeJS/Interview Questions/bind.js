let student1 = {
    sname: "Anas",
    mobile: 1234567890
}

let student = {
    sname: "Aban",
    mobile: 9876543210,

    getName: function(){
        console.log(this.sname,this.mobile);
    }
}

let sn =  student.getName.bind(student);
setTimeout(sn)

let st2 = student.getName.bind(student1);
setTimeout(st2)