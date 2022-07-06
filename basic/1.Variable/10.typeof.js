// typeof : 데이터 타입을 확인
// 값을 타입 문자열로 변환
let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 123
console.log(typeof variable);

// 할당된 값에 따라 variable의 타입이 바뀜

variable = {};
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof '123');
