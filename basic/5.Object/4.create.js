const apple = {
    name: 'apple',
    display: function() {
        console.log(`${this.name}:โค`);
    },
};
const banana = {
    name: 'banana',
    display: function() {
        console.log(`${this.name}:๐`);
    },
};

apple.display();
banana.display();

// ์์ฑ์ ํจ์
function Fruit(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
    // return this ์๋ต ๊ฐ๋ฅ
}

const orange = new Fruit('orange', '๐งก');
console.log(orange);