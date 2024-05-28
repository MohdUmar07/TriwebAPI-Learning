// PPolymorphism 

class Student {
    String name;
    int age;

    public void studentInfo(String name) {
        System.out.println(name);
    }

    public void studentInfo(int age) {
        System.out.println(age);
    }

    public void studentInfo(String name, int age) {
        System.out.println(name + " " + age);
    }
}

public class Polymorphism {

    public static void main(String[] arg) {
        Student s1 = new Student();
        s1.name = "Mohd Umar";
        s1.age = 19;

        s1.studentInfo(s1.name);
        s1.studentInfo(s1.age);
        s1.studentInfo(s1.name, s1.age);

    }

}