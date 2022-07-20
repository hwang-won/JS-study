/** 배열의 함수들
 * 배열 자체를 변경하는지, 새로운 배열을 반환하는지
 * 
 */
const fruits = ['❤', '🧡', '💛', '💚'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));

// 특정한 아이템의 위치를 찾을때
console.log(fruits.indexOf('🧡'));

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('💛'));

// 배열을 수정하며 업데이트 됨
// 추가 - 제일 뒤
let length = fruits.push('🤍');
console.log(fruits);
console.log(length);

// 추가 - 제일 앞
length = fruits.unshift('🖤');
console.log(fruits);

// 제거 - 제일 뒤
let lastItem = fruits.pop();
console.log(fruits);
console.log(lastItem);

// 제거 - 제일 앞
lastItem = fruits.shift();
console.log(fruits);
console.log(lastItem);

// 중간에 추가 또는 삭제
const del = fruits.splice(1, 1); // 
console.log(fruits);
console.log(del);

fruits.splice(1, 1, '🤎');  // 지우고 그 자리에 추가
console.log(fruits);

console.log('-----------');

// 잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 2);
console.log(newArr);
console.log(fruits);

// 여러개 배열을 붙여줌
const arr1 = [1,2,3];
const arr2 = [4,4,4];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

// 중첩 배열을 하나의 배열로 쫙 펴기
let array = [
    [1,2,3],
    [4,[5,6]]
];
console.log(array);
console.log(array.flat());
console.log(array.flat(2));
array = array.flat(3);

// 특정한 값으로 배열을 채우기
array.fill(0); // 배열 자체를 수정
console.log(array);

array.fill('s', 1, 3); // s로 1부터 3까지 채움
console.log(array);

// 배열을 문자열로 합하기
let text = array.join();
console.log(text);
text = array.join('|');
console.log(text);



