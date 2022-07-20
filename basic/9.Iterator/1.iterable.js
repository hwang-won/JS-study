/** iteration = 반복, 순회 
 * 순회가 가능한 기본적인 데이터 타입 자료구조 = array, string, map, set
 * iterable 하다는건 순회가 가능하다는 것.
 * [Symbol.iterator](): Iterator;
 * 심볼정의를 가진 객체나, 특정한 함수가 iterator을 리턴한다는 것은 순회가 가능한 객체이다 라는걸 알 수 있음
 * 순회가 가능하면 무엇을 할 수 있나? >> for..of, spread
 */

const array = [1,2,3];
for(const item of array) {
    console.log(item);
}

// for..of 랑 같음
// while (true) {
//     const item = iterator.next();
//     if (item.done) break;
//     console.log(item.value);
// }

const obj = { 0:1, 1:2 };
for(const item in obj) { // of를 못쓰고 in을 써야함.. key만 출력
    console.log(item);
}

const iterator = array.values();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done); // 반복이 끝났다 - true
