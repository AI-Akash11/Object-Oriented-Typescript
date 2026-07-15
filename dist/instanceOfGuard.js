"use strict";
// instance of type guard / type narrowing
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    getSleep(numberOfHours) {
        console.log(`${this.name} is sleeping for ${numberOfHours} hours`);
    }
}
class Students extends Person {
    constructor(name) {
        super(name);
    }
    doStudy(numberOfHours) {
        console.log(`${this.name} is studying for ${numberOfHours} hours`);
    }
}
class Teachers extends Person {
    constructor(name) {
        super(name);
    }
    takeClass(numberOfHours) {
        console.log(`${this.name} is teaching for ${numberOfHours} hours`);
    }
}
const isStudent = (user) => {
    return user instanceof Students;
};
const IsTeacher = (user) => {
    return user instanceof Teachers;
};
const getInfo = (user) => {
    if (isStudent(user)) {
        user.doStudy(10);
    }
    else if (IsTeacher(user)) {
        user.takeClass(2);
    }
    else {
        user.getSleep(8);
    }
};
const student2 = new Students("akash");
const teacher2 = new Teachers("mezba");
getInfo(student2);
getInfo(teacher2);
//# sourceMappingURL=instanceOfGuard.js.map