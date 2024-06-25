class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error('Abstract class "Shape" cannot be instantiated directly.');
        }
    }

    draw() {
        throw new Error('Method "draw" must be implemented in subclass.');
    }

    area() {
        throw new Error('Method "area" must be implemented in subclass.');
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    draw() {
        console.log(`Drawing circle with radius ${this.radius}`);
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

const circle = new Circle(7);
circle.draw();
console.log(`Area of circle: ${circle.area()}`);
