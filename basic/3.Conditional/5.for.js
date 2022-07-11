// 반복문 loop statement
// for (변수 선언문; 조건식; 증감식) {}
// 실행순서:
// 1. 변수선언문
// 2. 조건식의 값이 참이면 { } 코드블럭을 수행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될때까지 2번과 3번을 반복

for (let i = 0; i < 3; i++) {
    console.log(i);
}

for (let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        console.log(i, j);
    }
}

// 무한루프
// 중지되지 않고 게속 돌아감
for(;;) {
    console.log(' ');
}

// 반복문 제어: continue, break
// continue 밑 코드는 넘어감