const fruits = ['❤', '🧡', '💛', '💚'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// 추가, 삭제 - 안좋은 방식. 인덱스를 이용해 추가하는 것
fruits[4] = '💙';
console.log(fruits);

fruits[6] = '💜';
console.log(fruits);

delete fruits[1];
console.log(fruits);