// 원시타입(단일 데이터)은 값이 복사되어 전달됨. Primitive > value
let a = 1;
let b = a; // 1
b =2;
console.log(a);
console.log(b);

// 객체타입(복합 데이터)은 참조값(메모리 주소, 레퍼런스)이 복사되어 전달됨. Object > reference
let apple = {
    name: '사과'
};
let orange = apple; // 0x1234
orange.name = '오렌지';
console.log(apple);
console.log(orange);
