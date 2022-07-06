// 문자열 타입
let string = 'hi';
console.log(string);
string = 'hihi';
console.log(string);

// 특수 문자 출력
string = "'hihi'";
console.log(string);
string = 'mi\nhihihihi';
console.log(string);
string = 'my\t\tname\\is\\\u09AC';
console.log(string);

// 템플릿 리터럴 ${}
let id = '...?';
let greetings = "'hi" + id + " good night!'"
console.log(greetings);

greetings = `'hello${id} good...'`;
console.log(greetings);