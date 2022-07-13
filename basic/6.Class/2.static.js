/** static 정적 프로퍼티, 메소드
 * static = 클래스 레벨의 프로퍼티와 메소드. 
 * 
 * static 함수는 만들어진 인스턴스 함수에 안들어가 있음. class의 이름을 통해서만 접근이 가능.
 * 각각 변경되는게 아니라 클래스 레벨에서 공통적으로 사용되는 함수면 사용하는게 좋음
 */

class Fruit {
    // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
    static Max_Fruit = 4;
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    // 클래스 레벨의 메서드 - this를 참조할 수 없음.
    static makeRandomFruit() {
        return new Fruit('banana', '💛');
    }
    
    // 인스턴스 레벨의 메서드
    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.Max_Fruit);

// apple은 classFruit 클래스의 인스턴스
const apple = new Fruit('apple', '💗');

// 꼭 생성된 인스턴스를 통해 호출.
console.log(apple);
console.log(apple.name);
console.log(apple.emoji);
apple.display();
