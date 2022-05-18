// 1. var, let, const 을 이용한 선언, 초기화, 할당 관련 예제 및 var, let, const의 차이점 예제
var x = 1;
console.log(x);
var y = 10;
var z = x + y;
console.log(add(x,y));
console.log(z);
var x = 100;
console.log(x);
console.log(z);
var z = x + y;
console.log(z);
console.log(add(x,y));

function add(x, y) {
    return z = x + y;
    console.log();
}
console.log(add(x,y));

let i = 'hwang';
console.log(i);
i = 'geun';
console.log(i);

const me = 'hwang';
console.log(me);

// 2. 변수에 대한 hoisting에 따른 결과 예제 
console.log(name);
name = 'geunwon';
var name;
console.log(name);

// 3. 함수의 정의, 함수 호출
function add(x, y) {
    return z = x + y;
    console.log();
}
console.log(add(10,20));
let value = add(100,200);
console.log(value);


// 4. HTML에서 prompt, alert, confirm함수를 이용하는 예제
// alert("hello");

// let con = confirm('confirm');
// document.write(con);

// let pro = prompt("prompt");
// document.write(prompt);

// 5. javascript에서 형 변환 함수를 이용하는 예제, 숫자를 문자열, 문자열을 숫자로..
let num = 1 + "1" + "문자문자";
console.log(num);

// 문자령으로 변환
let text = true;
console.log(typeof text);
text = String(text);
console.log(typeof text);

// 숫자형으로 변환
let num1 = "12345";
console.log(num1);
console.log(num1 + 12345);
console.log(typeof num1);
let num2 = Number(num1);
console.log(num2 + 12345);
console.log(typeof num2);

// 6. 일반적인 함수선언과  let을 이용하여 함수변수를 이용하여 함수를 선언, 
// 두 가지 방법으로 함수를 호출할 때 hoisting의 문제 예제

// 7. HTML 에서 DOM객체의 사용예제
var header = document.createElement('h2');
var textNode = document.createTextNode('hello dom');
header.append(textNode);
document.body.appendChild(header);
