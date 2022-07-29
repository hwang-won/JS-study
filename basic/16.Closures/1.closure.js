/** closures
 * 함수와 렉시컬환경의 조합. 내부함수에서 외부함수에 있는 상태에 접근할 수 있는 권한을 주는 것
 */
const text = 'hello';
function func() {
  console.log(text);
}
func();

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  return inner;
}
const func1 = outer();
func1();
