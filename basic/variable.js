// 1. use strict
'use strict';

console.log('hello world')

// 2. variable
// let (read acd write. added in ES6)
// var (쓰지말기, 선언 전에도 사용가능..?, {} 블럭 무시함)
// var hoisting (어디에 선언했던 제일 위로 선언이 끌어올라감)
let globalName = 'global name'; // 어느 곳에서나 접근 가능
{ // 블럭 내부에서만 적용
    let  name = 'A';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name); 
console.log(globalName);

// 3. constants (read only)
// 값을 선언한 후 값을 바꿀 수 없음. immutable. 
// security, thread satety, reduce human mistakes
const daysInWeek = 7;

// 4. vatiable types
// primitive, single item : number, string, boolean, null underfiedn, symbol
// object, box container
// function, first-class function (다른 데이터 타입처럼 변수의 할당이 가능, 함수의 인자로 전달 가능, 함수에서 리턴 타입으로도 리턴 할 수 있는 것이 가능)
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - infinity
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'nor a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false : 0, null, undefined, Nan, ''
// true : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// Null (값이 없음, 비어있는 값)
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined (선언은 돼었지만 지정된 값이 없음.)
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol (다른 자료구조에서 고유한 식별자가 필요하거나 동시다발적으로 우선 순위를 주고 싶을때)
// 고유한 식별자가 필요할때 사용, string은 동일한 식별자로 인식됨.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1s}`); // .description 으로 string으로 변환해서 출력.

// object (박스형태)
const ellie = { name: 'ellie', age: '20'};
console.log(ellie);
ellie.age = 21;
console.log(ellie);

// 5. Dynamic typing : dynamicdally typed language
// 빠르게 프로토타입엔 좋지만, 다수의 엔지니어나 규모가 큰 프로젝트엔 별로...
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
