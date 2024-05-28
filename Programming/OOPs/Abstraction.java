abstract class Animal {
    abstract void walk();
}

class Chicken extends Animal {
    public void walk() {
        System.out.println("Walks on 2 legs");
    }
}

class Goat extends Animal {
    public void walk() {
        System.out.println("Walks on 4 legs");
    }
}

public class Abstraction {
    public static void main(String[] args) {
        Chicken chik1 = new Chicken();
        Goat goat1 = new Goat();

        chik1.walk();
        goat1.walk();

    }
}