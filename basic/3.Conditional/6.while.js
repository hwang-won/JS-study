// while(조건) {}
// 조건이 false가 될때까지 {} 코드를 반복 실행
let num = 5;
while (num >=0) {
    console.log(num);
    num--;
}

let isActive = true;
let i = 0;
while (isActive) {
    console.log('1');
    if (1===100) {
        break;
    }
    i++;
}

// 꼭 한번 무조건 실행해야 한다면 do-while
do {
    console.log('dodododo');
} while (isActive) {

}
