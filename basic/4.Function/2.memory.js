function add (a, b) {
    console.log(a);
    console.log(b);
    return a + b;
}

const sum = add; // 동일한 람수 정의

console.log(sum(1,2));
console.log(add(1,2));