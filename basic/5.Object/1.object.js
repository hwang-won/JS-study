/** 객체. 복합 데이터
 * 서로 연관있는 속성과 행동을 묶어 주기 위해
 * 밀접하게 관련 있는 상태와 행동을 객체로 묶기  
 */

// object lireral 
// new object()
// key - 문자, 숫자, 문자열, 심불
// value - 원시값, 객체(함수)

let apple = {
    name: 'apple',
    'hello-bye': '❤',
    0: 1,
};

// 속성, 데이터에 접근
apple.name; // 마침표 표기법, dot notation
console.log(apple['hello-bye']); // 대괄호 표기법, bracket notation

// 속성 추가
apple.emoji = '💢';
console.log(apple.emoji);

// 속성 삭제
delete apple.emoji;
console.log(apple.emoji);
