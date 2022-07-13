/**
 * 
 */

class Animal {
    constructor(color) {
        this.color = color;
    }
    eat() {
        console.log('Animal 먹자');
    }
    sleep() {
        console.log('Animal 자자');
    }
}

class Tiger extends Animal {
    play() {
        console.log('Tiger 놀자');
    }
};
const tiger = new Tiger('💛');
console.log(tiger);
tiger.eat();
tiger.play();
console.log('-------------');

class Dog extends Animal {
    constructor(color, owner) {
        super(color); // super = 상속하고 있는 부모를 가리킴
        this.owner = owner;
    }
    // overriding
    eat() {
        super.eat();
        console.log('Dog 또 먹어 또');
    }
}
const dog = new Dog('💛', '근원');
console.log(dog);
dog.eat();
console.log(dog.owner);