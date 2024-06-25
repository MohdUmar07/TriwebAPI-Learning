class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
        
    }

    bark() {
        console.log(`${this.name} is barking.`);
    }
}

const dog1 = new Dog('Liger');
dog1.eat();
dog1.bark();
