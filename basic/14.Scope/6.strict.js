'use strict';
// 엄격 모드 strict mode
// 기존에는 무시되던 에러들을 말해줌, 엔진의 최적화 작업을 어렵게 만드는 실수들을 잡음,
// 리액트와 같은 프레임워트 사용시 기본적으로 엄격 모드임
// var x = 1;

// delete x;

function add(x) {
  var a = 2;
  var b = a + x;
  console.log(this);
}
add(1);

const array = [1, 2, 3];
for (const num of array) {
  console.log(num);
}
