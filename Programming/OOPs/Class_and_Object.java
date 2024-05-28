// Object and Classes -----

class Student {
    String name;
    int age;

    public void studentInfo() {
        System.out.println("Name - "+this.name);
        System.out.println("Age - "+this.age);
    }
}

public class Class_and_Object {

    public static void main(String[] arg) {
        Student s1 = new Student();
        s1.name = "Mohd Umar";
        s1.age = 19;
        
        Student s2 = new Student();
        s2.name = "Anas Anwar";
        s2.age = 20;

        s1.studentInfo();
        s2.studentInfo();
    }

}