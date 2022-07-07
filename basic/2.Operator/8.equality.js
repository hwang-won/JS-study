// 동등 비교 관계 연산자
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름

const a1 = {
    name: 'a'
};
const a2 = {
    name: 'a'
};

console.log(a1==a2); // false   메모리 주소가 다름.
console.log(a1.name==a2.name); // true
console.log(a1.name===a2.name); // true