// Function
// 프로그램을 구성하는 기본적인 building block
// 여러번 재사용 가뇽. subprogram이라고도 함.
// 한가지의 task or 어떤 값을 게산하기위해 사용.

// 1. Function declaration
// 하나의 함수는 하나의 일만.
// 함수의 이름은 doSometing, command, verb
// function is object in JS
function printHello() {
    console.log('hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('hello!');
log('hi!');
log('1234!');


// 2. Parameters
// premitive : value 전달.
// object : reference 전달.
function changeName(obj) {
    obj.name = 'coder';
}
const groot = {name: 'groot'};
changeName(groot);
console.log(groot);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('HI!');

// 4. Rest parameters (added in ES6)
// ...은 배열 형태로 전달됨.
function printAll(...args) {
    console.log(args[0]);
    for (let i=0; i<args.length; i++) {
        console.log(args[i]);
    }
    for (const arg of args) {
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}
printAll('A', 'B', '-');

// 5. Local scope
let globalMessage = 'global'; // globla
function printMessage() {
    let message = 'hello';
    console.log(message); // local
    console.log(globalMessage);
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if(user.point > 10) {
    }
}
// good
function upgradeUser(user) {
    if(user.point <= 10) {
        return;
    }
}

// 1. Function expression
const print = function() {
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function
// 상황에 맞는 함수를 전달
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
const printYes = function() {
    console.log('yes');
}
const printNo = function print() {
    console.log('no');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const a = function() {
    console.log('a');
} 
// ==>>  const a = () => console.log('a');

// IIFE : Immediately Invoked Function Expression 
