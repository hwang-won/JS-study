/** hoisting 
 * 자바스크립트 엔진이 코드를 실행하기 전, 변수, 함수, 클래스의 선언물을 끌어 올리는 것을 말함
 * 쉽게 말하자면 변수를 제일 밑에 선언해도 코드를 맨위에 선언한 것 처럼 끌어올림.
 * 
 * 변수의 선언과 초기화를 분리한 후, 선언만 코드의 최상단으로 옮김.
 * let a = 1;을 예로 들면 a=1;은 신경쓰지 않고 let a가 선언되었다만 올림.
 */
// 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
// 함수의 선언문은 선언 이전에도 호출이 가능함
print();

function print() {
  console.log('Hello');
}

// 변수(let, const)와 클래스는 선언만 호이스팅이 되고,
// 초기화는 안됨
// 초기화 전, 변수에 접근하면 컴파일(빌드) 에러가 발생
// console.log(hi);
let hi = 'hi';
let func1 = function () {};

// const cat = new Cat();
class Cat {}

let x = 1;
{
  console.log(x);
  let x = 2;
}
