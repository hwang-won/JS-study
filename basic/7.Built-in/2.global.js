console.log(globalThis);
console.log(Infinity);

eval('const num = 2; console.log(num)');

console.log(parseFloat()); // 문자열 > 숫자열
console.log(parseInt()); // 실수 > 정수

// URL 
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리 해야함
const URL = 'https:/드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);
const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 컴포넌트 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));