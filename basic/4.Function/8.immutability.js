/** 불변성
 * 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 좋지 않음
 * 상태변경이 필요한 경우, 새로운 상태를 (오브젝트, 값) 만들어서 반환해야 함
 * 원시값 - 값에 의한 복사
 * 객체값 - 참조에 의한 복사 (메모리 주소)
 */

function display(num) {
    num = 5; // 이런거 금지
    console.log(num);
}
const value = 5;
display(value);

console.log('------1-------');

// 잘못된 예 
function displayObj(obj) {
    obj.name = 'kim'; // 외부로 부터 주어진 인자(오브젝트)를 내부에서 변경
    console.log(obj);
}
const won = { name: 'Won'};
displayObj(won);
console.log(won);

console.log('-------2------');

// 바꾼다면..
function changeName(obj) {  // 이런 느낌의 함수명
    console.log(obj);
    return {...obj, name: 'hwang'}; // 반한할때는 새로운 오브젝트 만들기
}
const geun = { name: 'Geun'};
changeName(geun);
console.log(geun);
