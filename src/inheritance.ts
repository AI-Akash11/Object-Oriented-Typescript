class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(numberOfHours: number) {
    console.log(`${this.name} sleeps for ${numberOfHours} hours`);
  }
}




class Student extends Parent {}

const student1 = new Student("Alice", 20, "123 Main St");

student1.getSleep(6);




class Teacher extends Parent {
  subject: string;

  constructor(name: string, age: number, address: string, subject: string) {

    super(name, age, address)

    this.subject = subject;
  }

  takeClass(hours : number) {
    console.log(`${this.name} is taking ${this.subject} class for ${hours} hours`);
  }

}

const teacher1 = new Teacher("Bob", 35, "456 Elm St", "Math");

teacher1.getSleep(5);
teacher1.takeClass(2);