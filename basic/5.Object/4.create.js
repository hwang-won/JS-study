const apple = {
    name: 'apple',
    display: function() {
        console.log(`${this.name}:❤`);
    },
};
const banana = {
    name: 'banana',
    display: function() {
        console.log(`${this.name}:💛`);
    },
};

apple.display();
banana.display();

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