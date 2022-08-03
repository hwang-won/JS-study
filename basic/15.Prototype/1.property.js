/** prototype = 대략적인 형태, 스케치
 *  
 * 자바스크립트에서 모든 객체들은 오브젝트라는 프로토타입을 가지고 있음. 
 * 외부에서 직접 접근 불가. 생성자 함수에서는 프로토타입으로 접근 가능.
 * 모든 객체들은 동일한 오브젝트 타입을 상속받음.(obj.__proto === obj2.__proto)
 * 
 * 배열은 array라는 프로토타입을 상속받고 있고, 배열은 객체니까 배열은 오브젝트 프로토타입을 상속받음. 
 * (이와 같은 이유로 모든 객체는 결국 오브젝트 프로토타입을 상속받음. 객체간 상속의 연결고리는 프로토타입 체인으로 연결됨)
 */
const dog = { name: '와우', emoji: '🐶' };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc);

Object.defineProperty(dog, 'name', {
  value: '멍멍',
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(dog.name);
console.log(Object.keys(dog));
delete dog.name;
console.log(dog.name);

const student = {};
Object.defineProperties(student, {
  firstName: {
    value: '영희',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: '김',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${lastName} ${firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(' ');
    },
    configurable: true,
  },
});
console.log(student);
