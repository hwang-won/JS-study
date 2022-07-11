function add(a, b) {
    console.log('function');
    const result = a + b;
    // 함수에서 값을 외부로 반환할때는 return
    return result;
}
console.log(add);
const result = add(1, 2);
console.log(result);