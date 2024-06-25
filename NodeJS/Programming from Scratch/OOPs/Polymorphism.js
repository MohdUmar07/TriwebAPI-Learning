class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log('Animal makes a sound.');
    }
}

class Dog extends Animal {
    makeSound() {
        console.log(this.name, 'barks.');
    }
}

class Cat extends Animal {
    makeSound() {
        console.log(this.name, 'meows.');
    }
}

const animals = [new Dog('Liger'), new Cat('Coffey')];
animals.forEach(animal => animal.makeSound());
