// switch
// 정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우
let day = 6; 
let dayName;
if (day === 0) {
    dayName = ('월요일');
} else if (day === 1) {
    dayName = ('화요일');
}

switch (day) {
    case 0: 
        dayName = '월요일';
        break;
    case 1: 
        dayName = '화요일';
        break;
}

let condition = 'ok'; 
let text;
switch (condition) {
    case 'ok':
    case 'goood':
        text = '좋음';
        break;
    case 'bad':
        text = '나쁨';
        break;
    default:
        console.log('없음')
}