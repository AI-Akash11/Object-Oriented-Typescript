"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    getTask() {
        console.log("Person is sleeping");
    }
}
class Student extends Person {
    getTask() {
        console.log("Student is studying");
    }
}
class NextLevelDeveloper extends Person {
    getTask() {
        console.log("NextLevelDeveloper is coding");
    }
}
const getTaskDetails = (person) => {
    person.getTask();
};
const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();
getTaskDetails(person1);
getTaskDetails(person2);
getTaskDetails(person3);
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    length;
    width;
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
    getArea() {
        return this.length * this.width;
    }
}
const getArea = (param) => {
    console.log(param.getArea());
};
const shape1 = new Circle(5);
const shape2 = new Rectangle(4, 6);
const shape3 = new Shape();
getArea(shape1);
getArea(shape2);
getArea(shape3);
//# sourceMappingURL=polymorphism.js.map