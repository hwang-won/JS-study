/** class 
 * 객체를 생성할 수 있는 템플릿 (청사진, 틀)
 * 객체지향 프로그랭밍을 할 수 있음. 객체끼리 서로 호환..
 * 생성자 함수를 사용하지 않고 클래스 사용.
 * 
 * 객체를 손쉽게 만들 수 있는 템플릿
 * 1. 생성자 함수 (오래된 고전방법)
 * 2. 클래스
 */

// 생성자 함수
function Fruit(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
    // return this 생략 가능
}

const orange = new Fruit('orange', '🧡');
console.log(orange);
console.log('--------------');

// 클래스
class classFruit {
    // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
}

// apple은 classFruit 클래스의 인스턴스
const apple = new classFruit('apple', '💗');

console.log(apple);
console.log(apple.name);
console.log(apple.emoji);
apple.display();