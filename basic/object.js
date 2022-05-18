// Object
// object = {key : value}


// object 생성 2가지
const obj1 = {};
const obj2 = new Object();

function print(person) {
    console.log(person.name);
    console.log(person.age);
}
const groot = {name: 'groot', age: 4};
print(groot);


// 2. Computed properties
// key는 string으로.
console.log(groot.name);
console.log(groot['name']);


// 3. Property value shorthand
const person1 = {name: 'a', age: 1};
const person2 = {name: 'b', age: 2};
const person3 = {name: 'c', age: 3};
const person4 = new Person('d', 4);


// 4. Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

console.log(person4);


// 5. in operator
console.log('name' in groot);
console.log('a' in groot);


// 6. for..in vs for..of
for ( key in groot) {
    console.log(key); 
}
const array = [1, 2, 3, 4,];
for (value of array) {
    console.log(value);
}


// 7. clonig
const user = {name: 'groot', age: '20'};
const user2 = user;
user2.name = 'abc';
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);

