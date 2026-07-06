// class Animal {
//     name: string;
//     species: string;
//     sound: string;

//     constructor(name: string, species: string, sound: string) {
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     }

//     makeSound() {
//         console.log(`${this.name} says ${this.sound}`);
//     }
// }


 

class Animal {

    constructor(public name: string, public species: string, public sound: string) {
    }

    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}


const dog = new Animal("Tom", "Dog", "Woof");

const cat = new Animal("Bob", "Cat", "Meow");

// console.log(dog.name);
// console.log(cat.sound);

dog.makeSound();