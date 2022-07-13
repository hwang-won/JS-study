/** 접근제어자 - 캡슐화
 * private(#), public(기본), protected
 * 
 */

class Fruit {
    #name;
    #emoji;
    #type = 'fruit';
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    display = () => {
        console.log(`${this.#name}: ${this.#emoji}`);
    };
}

const apple = new Fruit('apple', '💗');
console.log(apple);
apple.name = 'orange';
console.log(apple);
// apple.#name = 'orange'; #을 붙인 field는 외부에서 접근이 불가능함.

