// instance of type guard / type narrowing

class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

        getSleep(numberOfHours: number) {
        console.log(`${this.name} is sleeping for ${numberOfHours} hours`);
    }
}

class Students extends Person {

    constructor(name: string){
        super(name);
    }

    doStudy(numberOfHours: number) {
        console.log(`${this.name} is studying for ${numberOfHours} hours`);
    }
}

class Teachers extends Person {

    constructor(name: string){
        super(name);
    }

    takeClass(numberOfHours: number) {
        console.log(`${this.name} is teaching for ${numberOfHours} hours`);
    }
}


const isStudent = (user: Person) => {
    return user instanceof Students;
}

const IsTeacher = (user: Person) => {
    return user instanceof Teachers;
}


const getInfo = (user: Person) => {
    if (isStudent(user)) {
        user.doStudy(10);
    } else if (IsTeacher(user)) {
        user.takeClass(2);
    } else {
        user.getSleep(8);
    }
};

const student2 = new Students("akash");
const teacher2 = new Teachers("mezba");

getInfo(student2);
getInfo(teacher2);