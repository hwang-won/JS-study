// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi'; > error

// 1. 상수
const Max_Number = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
    name: 'apple',
    color: 'red'
};
console.log(apple);

// Object 변경은 가능
apple.name = 'orange';
console.log(apple);