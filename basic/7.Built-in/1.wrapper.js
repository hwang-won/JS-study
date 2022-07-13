/** 래퍼 객체 (wrapper object)
 * 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.
 */
const number = 123; // number 원시타입
console.log(number.toString()); // number 원시타입을 감싸고 있는 number 객체로 감싸짐
console.log(number); // number 원시타입

const text = 'text';
console.log(text);
text.length();
text.trim();

// 객체로 만들수 있지만 만들면 무거워지니 빌트인 객체 사용..