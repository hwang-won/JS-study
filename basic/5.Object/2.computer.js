

const obj = {
    name: 'h',
    age: 20,
};

// 코딩하는 시점에, 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용
function getValue(obj, key) {
    return obj[key];
}
console.log(getValue(obj, 'name'));

function addKey(obj, key, value) {
    obj[key] = value;
}

addKey(obj, 'job', 'engineer');
console.log(obj);

function deletKey(obj, key) {
    delete Object[key];
}
console.log(obj);

//  https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects

const x = 0;
const y = 0;
const c = {x, y} // = {x: x, y: y} 축약 가능 