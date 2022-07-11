/** 일급 객체 = 일반 객체처럼 모든 연산이 가능한 것.
 * - 한수의 매개변수로 전달
 * - 함수의 반환값
 * - 할당 명령문
 * - 동일 비교 대상
 * - 위의 기능이 가능한 함수 = 일급합수.
 * 
 *  고차 함수 
 * - 인자로 함수를 받거나 (콜백함수)
 * - 함수를 반환하는 함수를 고차 함수
 */

// 콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 전달된 action은 콜백함수
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼럼스(참조값)가 전달된다.
// 그래서 함수는 고차함수 안에서 필요한 순간에 호출이 나중에 됨.
function calculator(a, b, action) {
    let result = action(a, b);
    console.log('run...');
    console.log(result);
    return result;
}

calculator(1, 2, add);
calculator(5, 2, multiply);
