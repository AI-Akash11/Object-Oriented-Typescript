"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Parent {
    name;
    age;
    address;
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleep(numberOfHours) {
        console.log(`${this.name} sleeps for ${numberOfHours} hours`);
    }
}
class Student extends Parent {
}
const student1 = new Student("Alice", 20, "123 Main St");
student1.getSleep(6);
class Teacher extends Parent {
    subject;
    constructor(name, age, address, subject) {
        super(name, age, address);
        this.subject = subject;
    }
    takeClass(hours) {
        console.log(`${this.name} is taking ${this.subject} class for ${hours} hours`);
    }
}
const teacher1 = new Teacher("Bob", 35, "456 Elm St", "Math");
teacher1.getSleep(5);
teacher1.takeClass(2);
//# sourceMappingURL=inheritance.js.map