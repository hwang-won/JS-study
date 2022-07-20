/** iterable 을 조금더 간편하게 만들 수 있음 ==> Generator.
 * iteration protocol을 준수함
 */

// const multiple = {
//   [Symbol.iterator]: () => {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2, done: num > max };
//       },
//     };
//   },
// };
// 이전 iterable 방식.

// ' * ' 가 generator라는걸 표시함
function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      yield i ** 2;
    }
  } catch (error) {  // 에러방지 try-catch
    console.log(error);
  }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// multiple.return();
multiple.throw('Error!');

next = multiple.next();
console.log(next.value, next.done);

// 실제로 구현할 일은 잘 없음... 아마 for문을 이용해 사용..