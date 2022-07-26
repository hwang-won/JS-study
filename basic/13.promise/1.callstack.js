/** Call stack = 함수 실행 순서를 기억하는 곳 
 * 자바스크립트는 싱글 쓰레드로 기본적으로 하나의 한 가지 일만 처리가능. = 동기적으로 진행
 */
function a() {
  for (let i = 0; i < 1000000000000000; i++);
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

console.log('시작했다!');
const result = c();
console.log(result);
