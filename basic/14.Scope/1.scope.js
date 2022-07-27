/** 스코프 = 변수를 참조학수 있는(접근할 수 있는, 식별자가 유효) 유효한 범위.  선언 위치에 따라 유효 범위 결정
 * 이름 충동을 방지하고 메모리 절약을 위해 사용
*/

// 코드 블럭: { }, if() { }, for() { }, function() { }
// 블럭 외부에서는 블럭 내부의 변수를 참조할 수 ❌
{
  const a = 'a';
}
console.log(a);
const b = 'b';

// 함수 외부에서는 함수 내부의 변수를 참조 ❌
function print() {
  const message = 'Hello World';
  console.log(message);
}
console.log(message);

// 함수 외부에서는 함수의 매개변수를 참조 ❌
function sum(a, b) {
  console.log(a, b);
}
console.log(a, b);
