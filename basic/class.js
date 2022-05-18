'use strict'

// 1. Class delarations
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name}: hello!`);
    }
}
const groot = new Person('groot', 25);
console.log(groot.name);
groot.speak();

// 2. Getter and Setter
// 잘못 사용해도 괜찮게 함. 
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}
const user1 = new User('a', 'job', -3);
console.log(user1.age);

// 3. Fields

// 4. Static

// 5. Inheritance
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color`);
    }
    getArea() {
        return this.width * this.height;
    }
}
class Rectangle extends Shape {}
class Triangle extends Shape { // 오버라이딩
    draw() {
        super.draw();
        console.log('ㅗ');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. instansOf
// instans 판단
console.log(rectangle instanceof Rectangle);
console.log(Triangle instanceof Rectangle);
