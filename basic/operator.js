// 1. String concatenation
console.log('my ' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2: 1 + 2 = ${1 +2}`);

// 2. Numeric operator
console.log(2 ** 3); // 차수

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${preIncrement}`);
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${postIncrement}`);

// 4. Assigment operators
let x = 3;
let y = 6;
x += y; // x =  x + y;

// 5. comparison operators
console.log(10<=6);
console.log(10<6);

// 6. logical operators
const value1 = false;
const value2 = 4 < 2;

console.log(`or : ${value1 || value2 || check()}`); // true가 하나라도 나오면 멈춤. 제일 뒤 배치.
console.log(`and : ${value1 && value2 && check()}`); // 2, 3 은 실행이 안됨.
console.log(!value1); //

function check() {
    for(let i = 0; i < 10; i++) {
        console.log('.');
    }
    return true;
}

// 7. Equality
const stringFive = '5';
const numverFive = 5;
console.log(stringFive == numverFive); // 타입을 변경해서 검사함 true
console.log(stringFive != numverFive);
console.log(stringFive === numverFive); // 타입을 신경써서 검사 false
console.log(stringFive !== numverFive)
const ellie1 = { name: 'ellie'};
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// 8. if
const name = 'h';
if (name === 'h') {
    console.log('welcome, h');
} else if (name == 'a') {
    console.log('bye a');
} else {
    console.log('?');
}

// 9. ? (if를 쉽게 사용, 간단할 떄 사용하기)
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. switch (if 문에 else if 많다면 switch 사용)
const  browser = 'IE';
switch (browser) {
    case 'IE' :
        console.log('A');
        break;
    case 'Firefox':
    case 'chrome':
        console.log('B');
        break;
    default:
        console.log('C');
        break;
}

// 11. loops (false로 나오기 전까지 무한 반복)
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--
}
do { // 실행 한 후 조건이 맞는지 검사
    console.log(`do while: ${i}`);
    i--;
}while (i > 0);

for (i = 3; i > 0; i--) { 
    console.log(`for: ${i}`);
}
for (let i = 3; i > 0; i--) { 
    console.log(`let for: ${i}`);
}

